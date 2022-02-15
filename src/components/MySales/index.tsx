import { FC, Fragment, useCallback } from 'react';
import { DICTIONARY_MY_SALES } from '../../dictionary/dictionaries';
import { MySalesProps } from './MySales.d';
import './MySales.scss';

const { TITLE_TOTAL, TEXT_MONEY } = DICTIONARY_MY_SALES;

export const MySales: FC<MySalesProps> = ({ dataMySales }) => {
	const countTotal = useCallback(() => {
		let total = 0;
		dataMySales.salesByAddress.forEach((saleByAddress) => {
			saleByAddress.salesBySections.forEach((saleBySections) => {
				total += saleBySections.amount;
			});
		});
		return total;
	}, [dataMySales]);

	return (
		<div className="box box-white my-sales">
			<div className="my-sales-table line">
				<h2>{dataMySales.name}</h2>
				{dataMySales.salesByAddress.map((saleByAddress, key) => (
					<Fragment key={key}>
						<span className="address">{saleByAddress.address}</span>
						{saleByAddress.salesBySections.map((saleBySections, key) => {
							return (
								<div className="section line" key={key}>
									<span>{saleBySections.section}</span>
									<span>
										{saleBySections.amount} {saleBySections.currency}
									</span>
								</div>
							);
						})}
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
