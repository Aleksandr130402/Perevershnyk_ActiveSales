import { StrictMode } from 'react';
import { render } from 'react-dom';

import 'reflect-metadata';

import { App } from './App';

import { AppProvider } from './context/App.context';

import './assets/styles/style.scss';

render(
	<StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</StrictMode>,
	document.getElementById('root')
);
