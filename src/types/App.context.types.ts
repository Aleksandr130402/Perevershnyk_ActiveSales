import type { ReactNode } from 'react';
import type { StoreActionType } from '@temabit/perevershnyk-uikit/dist/Tools/context/types';

import type { AppActionTypes } from './action.types';

export type AppStatusValueType = 'ok' | 'loading' | 'no-data' | 'error';

export type AppStatusType = {
	value: AppStatusValueType;
	info?: ReactNode;
};

export interface State {
	appStatus: AppStatusType;
}

export type Action =
	| StoreActionType<AppActionTypes.SetAppStatus, { appStatus: AppStatusType }>
	| StoreActionType<AppActionTypes.ResetAppStatus, { appStatus: { value: 'ok' } }>;
