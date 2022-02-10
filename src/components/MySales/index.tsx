import { FC, Fragment } from 'react';
import { MySalesProps } from './MySales.d';
import './MySales.scss';

const titleTotal = 'загальна сума виторгу:';
const textMoney = ' грн';

export const MySales: FC<MySalesProps> = ({ dataMySales }) => {
	let total = 0;

	return (
		<div className="box box-white my-sales">
			<div className="my-sales-table line">
				{dataMySales.map((month, key) => (
					<Fragment key={key}>
						<h2>{month.name}</h2>
						{month.salesByAddress.map((saleByAddress, key) => (
							<Fragment key={key}>
								<span className="location">{saleByAddress.address}</span>
								{saleByAddress.salesBySections.map((saleBySections, key) => {
									total += saleBySections.amount;
									return (
										<div className="department line" key={key}>
											<span>{saleBySections.section}</span>
											<span>
												{saleBySections.amount} {saleBySections.currency}
											</span>
										</div>
									);
								})}
							</Fragment>
						))}
					</Fragment>
				))}
			</div>
			<div className="my-sales-sum">
				<span>{titleTotal}</span>
				<span>
					{total}
					{textMoney}
				</span>
			</div>
		</div>
	);
};
