import { Action, AppStatusValueType } from '../types/App.context.types';
import { AppActionTypes } from '../types/action.types';
import { ReactNode } from 'react';

export const dispatchAction = (type: Action['type'], payload: Action['payload']): Action => {
	return { type, payload } as Action;
};

export const setAppStatus = (value: AppStatusValueType, info?: ReactNode): Action => {
	return dispatchAction(AppActionTypes.SetAppStatus, { appStatus: { value, info } });
};

export const resetAppStatus = (): Action => {
	return dispatchAction(AppActionTypes.ResetAppStatus, { appStatus: { value: 'ok' } });
};
