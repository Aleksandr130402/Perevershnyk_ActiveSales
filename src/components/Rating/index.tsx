import { FC } from 'react';

import { EncourageMessage } from '../EncourageMessage';
import { TableSales } from '../TableSales';

export const Rating: FC = () => {
	return (
		<div>
			<EncourageMessage />
			<TableSales />
		</div>
	);
};
