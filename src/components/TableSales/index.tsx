import { FC } from 'react';
import classNames from 'classnames';

import { TableSalesProps } from './TableSales.d';
import trophyIcon from '../../assets/images/trophy.svg';

import './TableSales.scss';

const title = 'продажі';
const leftColumnName = 'перевешники';
const rightColumnName = 'грн/год';
const surname = 'Ваше прізвище';

export const TableSales: FC<TableSalesProps> = ({ dataRating }) => {
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
						<li className={classNames('sales-item', 'line', { highlight: surname === item.surname })} key={id}>
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
