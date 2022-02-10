import { FC, useCallback, useEffect, useState } from 'react';

import { ActiveSalesAPI, getApiData } from '../../utils/api';
import { ActiveSalesDto } from './ActiveSales.dto';
import { useAppDispatch } from '../../context/App.context';
import { setAppStatus } from '../../actions/App.actions';

import { dataRating, propForSwitcher, encourageMessage } from '../../mock/mockData';
import { CurrentSection } from '../../components/CurrentSection';
import { EncourageMessage } from '../../components/EncourageMessage';
import { MySales } from '../../components/MySales';
import { TableSales } from '../../components/TableSales';
import { FilterSwitches } from '../../components/FilterSwitches';

import './ActiveSales.scss';

const titleSection = 'Поточна секція';

export const ActiveSales: FC = () => {
	const appDispatch = useAppDispatch();
	const [checked, setChecked] = useState(true);
	const [activeSales, setActiveSales] = useState<ActiveSalesDto>({} as ActiveSalesDto);

	const getActiveSales = useCallback(async () => {
		await getApiData(ActiveSalesDto, () => new ActiveSalesAPI().getSales(1), {} as ActiveSalesDto, appDispatch, {
			onSuccess: (res) => {
				const response = res as ActiveSalesDto;
				setActiveSales(response);
				appDispatch(setAppStatus('ok'));
			}
		});
	}, [appDispatch]);

	useEffect(() => {
		!Object.keys(activeSales).length && getActiveSales();
	}, [getActiveSales, activeSales]);

	return (
		<div className="box-active-sales">
			{!!Object.keys(activeSales).length && (
				<>
					<CurrentSection title={titleSection} desc={activeSales.mySales.curSection} />
					<FilterSwitches changeStatus={() => setChecked(!checked)} propSwitches={propForSwitcher()} />
					{checked ? (
						<MySales dataMySales={activeSales.mySales.salesByMonths} />
					) : (
						<>
							<EncourageMessage message={encourageMessage} />
							<TableSales dataRating={dataRating} />
						</>
					)}
				</>
			)}
		</div>
	);
};
