import { FC, Fragment } from 'react';
import { MySalesProps } from './MySales.d';
import './MySales.scss';

const titleTotal = 'загальна сума виторгу:';
const textMoney = ' грн';

export const MySales: FC<MySalesProps> = ({ dataMySales }) => {
	return (
		<div className="box box-white my-sales">
			<div className="my-sales-table line">
				<h2>{dataMySales.month}</h2>
				{dataMySales.location.map((department, key) => (
					<Fragment key={key}>
						<span className="location">{department.name}</span>
						{department.departments.map((item, key) => (
							<div className="department line" key={key}>
								<span>{item.name}</span>
								<span>
									{item.price}
									{textMoney}
								</span>
							</div>
						))}
					</Fragment>
				))}
			</div>
			<div className="my-sales-sum">
				<span>{titleTotal}</span>
				<span>
					{dataMySales.total}
					{textMoney}
				</span>
			</div>
		</div>
	);
};
