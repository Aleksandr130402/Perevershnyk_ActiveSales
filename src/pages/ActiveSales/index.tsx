import { FC, useState } from 'react';
import { CurrentSection } from '../../components/CurrentSection';
import { EncourageMessage } from '../../components/EncourageMessage';
import { MySales } from '../../components/MySales';
import { TableSales } from '../../components/TableSales';
import { FilterSwitches } from '../../components/FilterSwitches';

import './ActiveSales.scss';

const propForSwitcher = () => [
	{
		value: '1',
		defaultChecked: true,
		label: 'мої продажі'
	},
	{
		value: '0',
		defaultChecked: false,
		label: 'рейтинг'
	}
];

export const ActiveSales: FC = () => {
	const [checked, setChecked] = useState(true);

	return (
		<div className="box-active-sales">
			<CurrentSection />
			<FilterSwitches changeStatus={() => setChecked(!checked)} propSwitches={propForSwitcher()} />
			{checked ? (
				<MySales />
			) : (
				<>
					<EncourageMessage />
					<TableSales />
				</>
			)}
		</div>
	);
};
