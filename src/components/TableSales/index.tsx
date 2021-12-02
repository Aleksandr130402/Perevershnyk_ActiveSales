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
			<div className="sales">
				{dataRating.map((item, id) => {
					const salesItemClass = classNames('sales-item', 'line', {
						highlight: surname === item.surname
					});

					return (
						<div className={salesItemClass} key={id}>
							<span>{id + 1}</span>
							{id === 0 && <img className="trophy" src={trophyIcon} alt="trophy" />}
							<span className="last-name">{item.surname}</span>
							<span>{item.money}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};
