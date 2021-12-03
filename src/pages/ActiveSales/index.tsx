import { FC, useState } from 'react';

import { sectionData, dataMySales1, dataMySales2, encourageMessage, dataRating } from '../../mock/mockData';
import { CurrentSection } from '../../components/CurrentSection';
import { EncourageMessage } from '../../components/EncourageMessage';
import { FilterSwitches } from '../../components/FilterSwitches';
import { MySales } from '../../components/MySales';
import { TableSales } from '../../components/TableSales';

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
			<CurrentSection title={sectionData.title} desc={sectionData.desc} />
			<FilterSwitches changeStatus={() => setChecked(!checked)} propSwitches={propForSwitcher()} />
			{checked ? (
				<>
					<MySales dataMySales={dataMySales1} />
					<MySales dataMySales={dataMySales2} />
				</>
			) : (
				<>
					<EncourageMessage message={encourageMessage} />
					<TableSales dataRating={dataRating} />
				</>
			)}
		</div>
	);
};
