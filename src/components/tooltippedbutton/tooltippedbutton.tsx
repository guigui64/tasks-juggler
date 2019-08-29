import { Button, IButtonProps, Position, Tooltip } from '@blueprintjs/core';
import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';

type TooltippedButtonStateProps = {
	smallScreen: boolean;
};

type TooltippedButtonProps = {
	text: string;
	showButtonText: boolean;
	disabled?: boolean;
	position?: Position;
	buttonProps?: IButtonProps;
} & TooltippedButtonStateProps;

const TooltippedButton: FC<TooltippedButtonProps> = ({
	text,
	showButtonText,
	position,
	disabled = false,
	smallScreen,
	buttonProps
}) => (
	<Tooltip
		content={text}
		disabled={disabled || showButtonText || smallScreen}
		position={position}
	>
		<Button
			text={showButtonText ? text : ''}
			disabled={disabled}
			{...buttonProps}
		/>
	</Tooltip>
);

const mapStateToProps = (state: AppState): TooltippedButtonStateProps => ({
	smallScreen: state.window.smallScreen
});

export default connect(mapStateToProps)(TooltippedButton);
