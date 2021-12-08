import { FC } from 'react';

import { sectionData, dataMySales1, dataMySales2, encourageMessage, dataRating } from '../../mock/mockData';
import { CurrentSection } from '../../components/CurrentSection';
import { EncourageMessage } from '../../components/EncourageMessage';
import { MySales } from '../../components/MySales';
import { TableSales } from '../../components/TableSales';

import './ActiveSales.scss';

export const ActiveSales: FC = () => {
	return (
		<div className="box-active-sales">
			<CurrentSection title={sectionData.title} desc={sectionData.desc} />

			<MySales dataMySales={dataMySales1} />
			<MySales dataMySales={dataMySales2} />

			<EncourageMessage message={encourageMessage} />
			<TableSales dataRating={dataRating} />
		</div>
	);
};
