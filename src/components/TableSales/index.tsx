import { FC } from 'react';
import './TableSales.scss';

export const TableSales: FC = () => {
	return (
		<div className="box box-white table-sales">
			<h2>Продажі</h2>
			<div className="sales-top">
				<span>Перевешники</span>
				<span>грн/год</span>
			</div>
			<div className="sales">
				<div className="sales-item first">
					<div className="sales-item-pos">
						<span>1</span>
						<span>🏆 Людвиг II</span>
					</div>
					<span>992 333</span>
				</div>
				<div className="sales-item-group">
					<div className="sales-item">
						<div className="sales-item-pos">
							<span>2</span>
							<span>Австрійська Б. А.</span>
						</div>
						<span>2 797</span>
					</div>
					<div className="sales-item">
						<div className="sales-item-pos">
							<span>3</span>
							<span>Баварський Ф. І.</span>
						</div>
						<span>1 997</span>
					</div>
					<div className="sales-item">
						<div className="sales-item-pos">
							<span>4</span>
							<span>Австрійська Б. А.</span>
						</div>
						<span>897</span>
					</div>
					<div className="sales-item">
						<div className="sales-item-pos">
							<span>5</span>
							<span>Ваше прізвище</span>
						</div>
						<span>797</span>
					</div>
					<div className="sales-item">
						<div className="sales-item-pos">
							<span>6</span>
							<span>Дуже дуже дуже довге прізви...</span>
						</div>
						<span>697</span>
					</div>
				</div>
				<div className="sales-item last">
					<div className="sales-item-pos">
						<span>7</span>
						<span>Баварський Ф. І.</span>
					</div>
					<span>691</span>
				</div>
			</div>
		</div>
	);
};
