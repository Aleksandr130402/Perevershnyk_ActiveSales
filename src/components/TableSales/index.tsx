import { FC, useCallback } from 'react';
import classNames from 'classnames';

import { TableSalesProps } from './TableSales.d';
import trophyIcon from '../../assets/images/trophy.svg';

import './TableSales.scss';

const title = 'продажі';
const leftColumnName = 'перевершники';
const rightColumnName = 'грн/год';
const surname = 'Ваше прізвище';

export const TableSales: FC<TableSalesProps> = ({ dataRating }) => {
	const itemSalesClass = useCallback((isHighlight: boolean) => {
		return classNames('sales-item', 'line', { highlight: isHighlight });
	}, []);

	return (
		<div className="box box-white table-sales">
			<h2>{title}</h2>
			<div className="sales-top line">
				<span>{leftColumnName}</span>
				<span>{rightColumnName}</span>
			</div>
			<ol className="sales">
				{dataRating.map((item, id) => {
					return (
						<li className={itemSalesClass(surname === item.surname)} key={id}>
							{id === 0 && <img className="trophy" src={trophyIcon} alt="trophy" />}
							<span className="last-name">{item.surname}</span>
							<span>{item.money}</span>
						</li>
					);
				})}
			</ol>
		</div>
	);
};
