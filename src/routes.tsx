import { routes } from '@temabit/perevershnyk-uikit/dist/Tools';
import { ActiveSales } from './pages/ActiveSales';

routes.routeConfigs = [
	{
		routeName: 'active-sales',
		routeTitle: 'Персональні продажі',
		routeComponent: <ActiveSales />
	},
	{
		routeName: '*',
		routeTitle: 'Fallback',
		routeComponent: <></>,
		redirectName: 'active-sales'
	}
];

export const appRoutes = routes;
