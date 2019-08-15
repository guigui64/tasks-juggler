import React from 'react';
import { Dialog, Classes, Button, TextArea, Intent } from '@blueprintjs/core';

export const DumpDatabaseDialog = ({ isOpen, onClose, dump }: any) => (
	<Dialog icon='database' title='Database dump' isOpen={isOpen}>
		<div className={Classes.DIALOG_HEADER}>
			<p>Copy paste it or save it into your files.</p>
		</div>
		<div className={Classes.DIALOG_BODY}>
			<TextArea>{dump}</TextArea>
			{/* TODO center + min size + readonly */}
		</div>
		<div className={Classes.DIALOG_FOOTER}>
			<div className={Classes.DIALOG_FOOTER_ACTIONS}>
				<Button
					text='Save to files'
					icon='folder-open'
					intent={Intent.PRIMARY}
				/>
				<Button text='Close' onClick={onClose} />
			</div>
		</div>
	</Dialog>
);

// TODO load database
