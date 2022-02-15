import { FC, Fragment } from 'react';
import { DICTIONARY } from '../../dictionary/dictionary';
import { MySalesProps } from './MySales.d';
import './MySales.scss';

const { TITLE_TOTAL, TEXT_MONEY } = DICTIONARY;

export const MySales: FC<MySalesProps> = ({ dataMySales }) => {
	let total = 0;
	const countTotal = (amount: number) => {
		total += amount;
		return total;
	};
	return (
		<div className="box box-white my-sales">
			<div className="my-sales-table line">
				<h2>{dataMySales.name}</h2>
				{dataMySales.salesByAddress.map((saleByAddress, key) => (
					<Fragment key={key}>
						<span className="address">{saleByAddress.address}</span>
						{saleByAddress.salesBySections.map((saleBySections, key) => {
							countTotal(saleBySections.amount);
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
					{total} {TEXT_MONEY}
				</span>
			</div>
		</div>
	);
};
