import { FC, Fragment, useCallback } from 'react';

import { MySalesProps } from './MySales.d';
import { MY_SALES } from '../../dictionaries';

import './MySales.scss';

const { TITLE_TOTAL, TEXT_MONEY } = MY_SALES;

export const MySales: FC<MySalesProps> = ({ dataMySales }) => {
	const countTotal = useCallback(() => {
		let total = 0;
		dataMySales.salesByAddress.forEach((saleByAddress) => {
			saleByAddress.salesBySections.forEach((saleBySections) => {
				total += saleBySections.amount;
			});
		});
		return total.toLocaleString();
	}, [dataMySales]);

	return (
		<div className="box box-white my-sales">
			<div className="my-sales-table line">
				<h2>{dataMySales.name}</h2>
				{dataMySales.salesByAddress.map((saleByAddress, key) => (
					<Fragment key={key}>
						<span className="address">{saleByAddress.address}</span>
						{saleByAddress.salesBySections.map((saleBySections, key) => (
							<div className="section line" key={key}>
								<span>{saleBySections.section}</span>
								<span>
									{saleBySections.amount.toLocaleString()} {saleBySections.currency}
								</span>
							</div>
						))}
					</Fragment>
				))}
			</div>
			<div className="my-sales-sum">
				<span>{TITLE_TOTAL}</span>
				<span>
					{countTotal()} {TEXT_MONEY}
				</span>
			</div>
		</div>
	);
};
