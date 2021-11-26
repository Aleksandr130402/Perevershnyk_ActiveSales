import { createContextTools } from '@temabit/perevershnyk-uikit/dist/Tools';

import { reducer } from '../reducers/App.reducer';

import { State } from '../types/App.context.types';

const initialState: State = {
	appStatus: { value: 'ok' }
};

export const {
	useContextDispatch: useAppDispatch,
	useContextState: useAppState,
	ContextProvider: AppProvider
} = createContextTools(initialState, reducer, 'App');
