import React, { FunctionComponent } from 'react';
import {
	Dialog,
	Classes,
	Tooltip,
	Button,
	IDialogProps
} from '@blueprintjs/core';

type AddDialogProps = { add: () => void } & IDialogProps;

const AddDialog: FunctionComponent<AddDialogProps> = ({
	add,
	...dialogProps
}) => (
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
