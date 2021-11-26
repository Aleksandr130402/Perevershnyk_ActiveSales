import { AppActionTypes } from '../types/action.types';

import type { Action, AppStatusValueType, State } from '../types/App.context.types';

const defaultStateUpdate = (state: State, action: Action): State => {
	return { ...state, ...action.payload };
};

export const reducer = (state: State, action: Action): State => {
	const criticalStates = ['error', 'no-data'] as AppStatusValueType[];

	switch (action.type) {
		case AppActionTypes.SetAppStatus: {
			if (action.payload.appStatus.value === state.appStatus.value) {
				return state;
			} else {
				if (criticalStates.indexOf(state.appStatus.value) !== -1) {
					return state;
				} else {
					return defaultStateUpdate(state, action);
				}
			}
		}

		case AppActionTypes.ResetAppStatus: {
			if (action.payload.appStatus.value === state.appStatus.value) {
				return state;
			} else {
				if (criticalStates.indexOf(state.appStatus.value) !== -1) {
					return { ...state, appStatus: { value: 'ok', info: undefined } };
				} else {
					return state;
				}
			}
		}

		default: {
			return state;
		}
	}
};
