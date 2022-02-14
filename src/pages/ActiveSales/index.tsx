import { FC, useCallback, useEffect, useState } from 'react';

import { ActiveSalesAPI, getApiData } from '../../utils/api';
import { ActiveSalesDto } from './ActiveSales.dto';
import { useAppDispatch } from '../../context/App.context';
import { setAppStatus } from '../../actions/App.actions';

import { CurrentSection } from '../../components/CurrentSection';
import { MySales } from '../../components/MySales';
import { FilterSwitches } from '../../components/FilterSwitches';

import './ActiveSales.scss';

const titleSection = 'поточна секція';

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
					<CurrentSection title={titleSection} desc={activeSales.mySales.curSection} />
					<FilterSwitches changeStatus={() => setChecked(!checked)} propSwitches={propForSwitcher()} />
					{activeSales.mySales.salesByMonths.map((item, key) => (
						<MySales key={key} dataMySales={item} />
					))}
				</>
			)}
		</div>
	);
};
