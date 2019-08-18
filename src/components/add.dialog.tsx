import {
	Button,
	Classes,
	Dialog,
	IDialogProps,
	Tooltip
} from '@blueprintjs/core';
import React, { FC } from 'react';

type AddDialogProps = { add: () => void } & IDialogProps;

const AddDialog: FC<AddDialogProps> = ({ add, ...dialogProps }) => (
	<Dialog icon='info-sign' title='Palantir Foundry' {...dialogProps}>
		<div className={Classes.DIALOG_BODY}>
			<p>TODO add project form</p>
			{/* TODO add project form */}
		</div>
		<div className={Classes.DIALOG_FOOTER}>
			<div className={Classes.DIALOG_FOOTER_ACTIONS}>
				<Tooltip content='This button is hooked up to close the dialog.'>
					<Button onClick={dialogProps.onClose}>Close</Button>
				</Tooltip>
				<Button
					text='Add'
					onClick={() => {
						add();
						dialogProps.onClose!();
					}}
				/>
			</div>
		</div>
	</Dialog>
);

export default AddDialog;
