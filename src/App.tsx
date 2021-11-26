import { HashRouter as Router } from 'react-router-dom';
import classNames from 'classnames';
import { isMobile } from '@temabit/perevershnyk-rpc-iframe/dist/mobile/helpers';
import { BlockView, Return } from '@temabit/perevershnyk-uikit/dist/Components';

import { useAppState, useAppDispatch } from './context/App.context';
import { resetAppStatus } from './actions/App.actions';

import { appRoutes } from './routes';

import type { FC } from 'react';

export const App: FC = () => {
	const { appStatus } = useAppState();
	const appDispatch = useAppDispatch();

	const mainClasses = classNames({
		'device-desktop': !isMobile()
	});

	const routes = appRoutes.getRouteStructure();

	const returnClickHandler = () => {
		appDispatch(resetAppStatus());
	};

	return (
		<Router>
			<main className={mainClasses}>
				<div className="wrap-main-box">
					<div className="box-border-top"></div>
					<div className="box">{routes}</div>
					<div className="box-border-bottom"></div>
				</div>
			</main>
			<BlockView status={appStatus.value} info={appStatus.info} />
			<Return onClick={returnClickHandler} />
		</Router>
	);
};
