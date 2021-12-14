import { FC } from 'react';

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
						/>
						<label htmlFor={`switches-${item.value}`}>{item.label}</label>
					</div>
				);
			})}
		</div>
	);
};
