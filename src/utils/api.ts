import { Dispatch } from 'react';
import { AxiosError } from 'axios';
import { plainToClass, ClassConstructor } from 'class-transformer';
import { validateSync, ValidationError } from 'class-validator';
import { client } from '@temabit/perevershnyk-rpc-iframe';

import { mappedResponse } from './error.handling';

import { setAppStatus } from '../actions/App.actions';

import { Action } from '../types/App.context.types';

type apiSection = 'CrossfitActiveSales';

const baseUrl = (endpoint?: string) => {
	const protocolPart = `https://`;
	const hostname = endpoint || window.location.hostname;
	const pathToAPI = `/api${endpoint ? '' : '/perevershnyk/perevershnyk_spbridge'}`;

	return `${protocolPart}${hostname}${pathToAPI}`;
};

abstract class HttpClient {
	protected instance = client;

	public constructor(apiSection: apiSection) {
		this.instance.defaults.baseURL = `${baseUrl(process.env.API_ENDPOINT)}/${apiSection}`;

		this.instance.defaults.headers.common = {
			Accept: 'application/json;odata=verbose'
		};

		if (process.env.NODE_ENV === 'development' && process.env.HEADER_SID) {
			this.instance.defaults.headers.common = {
				_globaluserid: process.env.HEADER_SID
			};
		}
	}
}

export class ActiveSalesAPI extends HttpClient {
	public constructor() {
		super('CrossfitActiveSales');
	}
	public async getSales<T>(): Promise<T> {
		const response = await this.instance.get<T>('');
		return response.data;
	}
}

let connErrRetryCount = 1;
export async function getApiData<T>(
	cls: ClassConstructor<T>,
	apiCall: () => Promise<T | T[]>,
	defaultReturn: T | T[],
	dispatch?: Dispatch<Action>,
	events?: {
		onStart?: () => void;
		onSuccess?: (resultInstances: T | T[]) => void;
		onEmpty?: () => void;
		onError?: (error: unknown, defaultReturn: T | T[]) => void;
	}
): Promise<T | T[]> {
	let result = defaultReturn instanceof Array ? ([] as T[]) : ({} as T);

	try {
		if (events?.onStart) {
			events.onStart();
		} else {
			dispatch && dispatch(setAppStatus('loading'));
		}

		const apiResponse = await apiCall();

		let resultInstances = apiResponse instanceof Array ? ([] as T[]) : ({} as T);

		if (Object.keys(apiResponse).length) {
			const validationErrors = [] as ValidationError[];

			if (apiResponse instanceof Array) {
				resultInstances = plainToClass(cls, apiResponse);
				resultInstances.map((instance) => {
					validationErrors.push(...validateSync(instance as unknown as Record<string, unknown>));
				});
			} else {
				resultInstances = plainToClass(cls, apiResponse);
				validationErrors.push(...validateSync(resultInstances as unknown as Record<string, unknown>));
			}

			if (validationErrors.length) {
				dispatch && dispatch(setAppStatus('error'));
			}

			if (events?.onSuccess) {
				events.onSuccess(resultInstances);
				result = resultInstances;
			} else {
				result = resultInstances;

				dispatch && dispatch(setAppStatus('ok'));
			}
		} else {
			if (events?.onEmpty) {
				events.onEmpty();
			} else {
				dispatch && dispatch(setAppStatus('no-data'));
			}
		}
	} catch (error) {
		if (events?.onError) {
			events.onError(error, defaultReturn);
		} else {
			const typedError = error as AxiosError;
			result = mappedResponse<T | T[]>(
				`${typedError.config.baseURL}/${typedError.config.url}`,
				typedError.response,
				typedError.message,
				defaultReturn
			);

			if (connErrRetryCount < 2) {
				connErrRetryCount++;
				getApiData(cls, apiCall, defaultReturn, dispatch, events);
			} else {
				connErrRetryCount = 1;
				dispatch && dispatch(setAppStatus('error'));
			}

			return result;
		}
	}

	return result;
}
