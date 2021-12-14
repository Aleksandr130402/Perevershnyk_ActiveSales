import { FC } from 'react';
import { CurrentSectionProps } from './CurrentSection.d';

import './CurrentSection.scss';

export const CurrentSection: FC<CurrentSectionProps> = ({ title, desc }) => {
	return (
		<div className="box box-white current-section">
			<h2>{title}</h2>
			<p>{desc}</p>
		</div>
	);
};
