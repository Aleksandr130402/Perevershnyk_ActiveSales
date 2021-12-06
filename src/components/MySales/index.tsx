import { FC } from 'react';
import './MySales.scss';

export const MySales: FC = () => {
	return (
		<>
			<div className="box box-white my-sales">
				<div className="my-sales-table line">
					<h2>Грудень 2021</h2>
					<span className="location">Оболонський пр. 21</span>
					<div className="department line">
						<span>Гастрономія + Лавка Традицій + Рибний відділ</span>
						<span>1 113 грн</span>
					</div>
					<div className="department line">
						<span>Пекарня</span>
						<span>632 333 грн</span>
					</div>
					<span className="location">Перемоги пр. 10</span>
					<div className="department line">
						<span>Пекарня</span>
						<span>2 333 грн</span>
					</div>
				</div>
				<div className="my-sales-sum">
					<span>Загальна сума виторгу:</span>
					<span>358 566 грн</span>
				</div>
			</div>
			<div className="box box-white my-sales">
				<div className="my-sales-table line">
					<h2>Листопад 2021</h2>
					<span className="location">Оболонський пр. 21</span>
					<div className="department line">
						<span>Пекарня</span>
						<span>2 333 грн</span>
					</div>
				</div>
				<div className="my-sales-sum">
					<span>Загальна сума виторгу:</span>
					<span>2 333 грн</span>
				</div>
			</div>
		</>
	);
};
