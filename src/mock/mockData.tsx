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
