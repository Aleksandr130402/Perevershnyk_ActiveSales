import { FC } from 'react';
import trophyIcon from '../../assets/images/trophy.svg';

import './TableSales.scss';

export const TableSales: FC = () => {
	return (
		<div className="box box-white table-sales">
			<h2>Продажі</h2>
			<div className="sales-top line">
				<span>Перевешники</span>
				<span>грн/год</span>
			</div>
			<ol className="sales">
				<li className="sales-item line">
					<img className="trophy" src={trophyIcon} alt="trophy" />
					<span className="last-name">Людвиг II</span>
					<span>992 333</span>
				</li>
				<li className="sales-item line">
					<span className="last-name">Австрійська Б. А.</span>
					<span>2 797</span>
				</li>
				<li className="sales-item line">
					<span className="last-name">Баварський Ф. І.</span>
					<span>1 997</span>
				</li>
				<li className="sales-item line">
					<span className="last-name">Австрійська Б. А.</span>
					<span>897</span>
				</li>
				<li className="sales-item line highlight">
					<span className="last-name">Ваше прізвище</span>
					<span>797</span>
				</li>
				<li className="sales-item line">
					<span className="last-name">Дуже дуже дуже довге прізвищщщщщщеееее</span>
					<span>697</span>
				</li>
				<li className="sales-item line">
					<span className="last-name">Баварський Ф. І.</span>
					<span>691</span>
				</li>
			</ol>
		</div>
	);
};
