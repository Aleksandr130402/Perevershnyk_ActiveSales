import type { AxiosResponse } from 'axios';

type ErrorDataType = {
	message: string;
	statusCode: number;
};

export const mappedResponse = <T>(
	url: string,
	response?: AxiosResponse,
	axiosStatusMsg?: string,
	defaultResponse?: T
): T => {
	const errorDataTyped = response?.data as ErrorDataType;
	console.log(
		`Request ${url} failed => ${response ? 'SERVER' : 'BROWSER'} responded with ${
			response ? `CODE ${response.status} and ` : ''
		}MESSAGE: "${response ? errorDataTyped.message || response.statusText : axiosStatusMsg}"`
	);
	return defaultResponse || ({} as T);
};
