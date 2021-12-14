import { ItemSales } from '../components/MySales/MySales.d';
import { TableItemSales } from '../components/TableSales/TableSales.d';

export const propForSwitcher = () => [
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

export const sectionData = {
	title: 'Поточна секція',
	desc: 'Гастрономія + Лавка Традицій + Рибний відділ'
};

export const dataMySales1: ItemSales = {
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

export const dataMySales2: ItemSales = {
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

export const dataRating: TableItemSales[] = [
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

export const encourageMessage = `100% ти можеш більше! Ми в тебе віримо! Ти - молодець!`;
