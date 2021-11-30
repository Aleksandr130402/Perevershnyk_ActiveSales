import { FC } from 'react';
import './MySales.scss';

export const MySales: FC = () => {
	return (
		<div className="box box-white my-sales">
			<h2>Грудень 2021</h2>
			<div className="my-sales-table">
				<span className="location">Оболонський пр. 21</span>
				<div className="department">
					<span>Гастрономія + Лавка Традицій + Рибний відділ</span>
					<span>1 113 грн</span>
				</div>
				<span className="location">Перемоги пр. 10</span>
				<div className="department">
					<span>Пекарня</span>
					<span>2 333 грн</span>
				</div>
			</div>
			<div className="my-sales-sum">
				<span>Загальна сума виторгу:</span>
				<span>358 566 грн</span>
			</div>
		</div>
	);
};
