import { FC } from 'react';
import { CurrentSection } from '../../components/CurrentSection';
import { EncourageMessage } from '../../components/EncourageMessage';
// import { MySales } from '../../components/MySales';
import { TableSales } from '../../components/TableSales';

import './ActiveSales.scss';

export const ActiveSales: FC = () => {
	return (
		<div className="box-active-sales">
			<CurrentSection />
			{/* <MySales /> */}
			<EncourageMessage />
			<TableSales />
		</div>
	);
};
