import { FC } from 'react';
import { FILTER_LABELS } from '../../dictionary/dictionaries';

import { FilterSwitchesProps } from './FilterSwitches.d';

import './FilterSwitches.scss';

export const FilterSwitches: FC<FilterSwitchesProps> = ({ changeStatus, propSwitches }) => {
	return (
		<div className="box box-white line line-btn-filter">
			{propSwitches.map((item, key) => {
				return (
					<div key={key} className="item-btn">
						<input
							type="radio"
							id={`switches-${item.value}`}
							className="input-switches"
							name="switches"
							defaultChecked={item.defaultChecked}
							value={item.value.toString()}
							onChange={changeStatus}
							disabled={item.label === FILTER_LABELS.LABEL_RATINGS}
						/>
						<label htmlFor={`switches-${item.value}`}>{item.label}</label>
					</div>
				);
			})}
		</div>
	);
};
