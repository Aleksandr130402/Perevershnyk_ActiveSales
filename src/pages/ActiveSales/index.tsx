import { FC, useState } from 'react';

import { CurrentSection } from '../../components/CurrentSection';
import { EncourageMessage } from '../../components/EncourageMessage';
import { FilterSwitches } from '../../components/FilterSwitches';
import { ItemSales } from '../../components/MySales/MySales.d';
import { MySales } from '../../components/MySales';
import { TableSales } from '../../components/TableSales';
import { TableItemSales } from '../../components/TableSales/TableSales.d';

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

const sectionData = {
	title: 'Поточна секція',
	desc: 'Гастрономія + Лавка Традицій + Рибний відділ'
};

// const dataMySales: ItemSales[] = [
// 	{
// 		month: 'Грудень 2021',
// 		location: [
// 			{
// 				name: 'Оболонський пр. 21',
// 				departments: [
// 					{
// 						name: 'Гастрономія + Лавка Традицій + Рибний відділ',
// 						price: 1113
// 					},
// 					{
// 						name: 'Пекарня',
// 						price: 632333
// 					}
// 				]
// 			},
// 			{
// 				name: 'Перемоги пр. 10',
// 				departments: [
// 					{
// 						name: 'Пекарня',
// 						price: 2333
// 					}
// 				]
// 			}
// 		],
// 		total: 358566
// 	},
// 	{
// 		month: 'Листопад 2021',
// 		location: [
// 			{
// 				name: 'Оболонський пр. 21',
// 				departments: [
// 					{
// 						name: 'Пекарня',
// 						price: 2333
// 					}
// 				]
// 			}
// 		],
// 		total: 2333
// 	}
// ];

const dataMySales1: ItemSales = {
	month: 'Грудень 2021',
	location: [
		{
			name: 'Оболонський пр. 21',
			departments: [
				{
					name: 'Гастрономія + Лавка Традицій + Рибний відділ',
					price: 1113
				},
				{
					name: 'Пекарня',
					price: 632333
				}
			]
		},
		{
			name: 'Перемоги пр. 10',
			departments: [
				{
					name: 'Пекарня',
					price: 2333
				}
			]
		}
	],
	total: 358566
};
const dataMySales2: ItemSales = {
	month: 'Листопад 2021',
	location: [
		{
			name: 'Оболонський пр. 21',
			departments: [
				{
					name: 'Пекарня',
					price: 2333
				}
			]
		}
	],
	total: 2333
};

const dataRating: TableItemSales[] = [
	{
		surname: 'Людвиг II',
		money: 992333
	},
	{
		surname: 'Австрійська Б. А.',
		money: 2197
	},
	{
		surname: 'Баварський Ф. І.',
		money: 1997
	},
	{
		surname: 'Австрійська Б. А.',
		money: 897
	},
	{
		surname: 'Ваше прізвище',
		money: 797
	},
	{
		surname: 'Дуже дуже дуже довге прізвищееееееее',
		money: 697
	},
	{
		surname: 'Баварський Ф. І.',
		money: 597
	}
];

const encourageMessage = `100% ти можеш більше! Ми в тебе віримо! Ти - молодець!`;

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
