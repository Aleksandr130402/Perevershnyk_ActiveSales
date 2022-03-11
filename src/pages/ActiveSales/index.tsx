import { FC, useCallback, useEffect, useState } from 'react';

import { CurrentSection } from '../../components/CurrentSection';
import { MySales } from '../../components/MySales';
import { FilterSwitches } from '../../components/FilterSwitches';

import { setAppStatus } from '../../actions/App.actions';

import { useAppDispatch } from '../../context/App.context';

import { ActiveSalesAPI, getApiData } from '../../utils/api';

import { ActiveSalesDto } from './ActiveSales.dto';

import { MY_SALES, FILTER_LABELS } from '../../dictionaries';

import './ActiveSales.scss';

const { TITLE_SECTION } = MY_SALES;
const { LABEL_MY_SALES, LABEL_RATINGS } = FILTER_LABELS;

const propForSwitcher = () => [
	{
		value: '1',
		defaultChecked: true,
		label: LABEL_MY_SALES
	},
	{
		value: '0',
		defaultChecked: false,
		label: LABEL_RATINGS
	}
];

export const ActiveSales: FC = () => {
	const appDispatch = useAppDispatch();
	const [checked, setChecked] = useState(true);
	const [activeSales, setActiveSales] = useState<ActiveSalesDto>({} as ActiveSalesDto);

	const getActiveSales = useCallback(async () => {
		await getApiData(ActiveSalesDto, () => new ActiveSalesAPI().getSales(), {} as ActiveSalesDto, appDispatch, {
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
					<CurrentSection title={TITLE_SECTION} desc={activeSales.mySales.curSection} />
					<FilterSwitches changeStatus={() => setChecked(!checked)} propSwitches={propForSwitcher()} />
					{activeSales.mySales.salesByMonths.map((item, key) => (
						<MySales key={key} dataMySales={item} />
					))}
				</>
			)}
		</div>
	);
};
