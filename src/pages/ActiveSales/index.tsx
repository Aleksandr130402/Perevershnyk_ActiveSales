import { FC, useState } from 'react';
import { CurrentSection } from '../../components/CurrentSection';
import { FilterSwitches } from '../../components/FilterSwitches';
import { MySales } from '../../components/MySales';
import { Rating } from '../../components/Rating';

import './ActiveSales.scss';

export const ActiveSales: FC = () => {
	const [checked, setChecked] = useState(true);
	const propForSwitcher = () => [
		{
			value: '1',
			defaultChecked: true,
			label: 'Мої продажі'
		},
		{
			value: '0',
			defaultChecked: false,
			label: 'Рейтинг'
		}
	];

	return (
		<div className="box-active-sales">
			<CurrentSection />
			<FilterSwitches changeStatus={() => setChecked(!checked)} propSwitches={propForSwitcher()} />
			{checked ? <MySales /> : <Rating />}
		</div>
	);
};
