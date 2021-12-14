import { FC } from 'react';
import { EncourageMessageProps } from './EncourageMessage.d';
import './EncourageMessage.scss';

export const EncourageMessage: FC<EncourageMessageProps> = ({ message }) => {
	return (
		<div className="box box-white encourage-message">
			<p>{message}</p>
		</div>
	);
};
