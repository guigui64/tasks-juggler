import { Button, IButtonProps, Position, Tooltip } from '@blueprintjs/core';
import React, { FC } from 'react';

type TooltippedButtonProps = {
	text: string;
	showButtonText: boolean;
	disabled?: boolean;
	position?: Position;
} & IButtonProps;

const TooltippedButton: FC<TooltippedButtonProps> = ({
	text,
	showButtonText,
	position,
	disabled = false,
	...otherProps
}) => (
	<Tooltip
		content={text}
		disabled={disabled || showButtonText}
		position={position}
	>
		<Button
			text={showButtonText ? text : ''}
			disabled={disabled}
			{...otherProps}
		/>
	</Tooltip>
);

export default TooltippedButton;
