export interface propSwitcher {
	value: string;
	defaultChecked: boolean;
	label: string;
}

export interface FilterSwitchesProps {
	propSwitches: propSwitcher[];
	changeStatus: () => void;
}
