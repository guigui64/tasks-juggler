import React, { FC, useState } from 'react';
import {
	Dialog,
	Classes,
	Button,
	TextArea,
	Intent,
	IDialogProps,
	FileInput
} from '@blueprintjs/core';

const fileSaver = require('file-saver');
const fileReader = new FileReader();

type DumpDataBaseDialogProps = {
	dump: string;
	onClipboard: () => void;
} & IDialogProps;

export const DumpDataBaseDialog: FC<DumpDataBaseDialogProps> = ({
	isOpen,
	onClose,
	dump,
	onClipboard
}) => (
	<Dialog
		icon='database'
		title='DataBase dump'
		isOpen={isOpen}
		onClose={onClose}
	>
		<div className={Classes.DIALOG_BODY}>
			<p>Copy to clipboard or save it to your files :</p>
			<TextArea
				id='dump'
				readOnly
				style={{
					width: '100%',
					minHeight: '300px'
				}}
				defaultValue={dump}
			/>
		</div>
		<div className={Classes.DIALOG_FOOTER}>
			<div className={Classes.DIALOG_FOOTER_ACTIONS}>
				<Button
					text='Copy to clipboard'
					icon='clipboard'
					intent={Intent.PRIMARY}
					onClick={() => {
						// Copy to clipboard
						(document.getElementById('dump') as HTMLTextAreaElement).select();
						document.execCommand('copy');
						// Display toaster
						onClipboard();
					}}
				/>
				<Button
					text='Download as JSON'
					icon='download'
					intent={Intent.PRIMARY}
					onClick={() => {
						const blob = new Blob([dump], { type: 'text/plain;charset=utf-8' });
						fileSaver.saveAs(blob, 'tasks-juggler-db.json');
					}}
				/>
			</div>
		</div>
	</Dialog>
);

type LoadDataBaseDialogProps = {
	onLoad: (input: string) => boolean;
} & IDialogProps;

export const LoadDataBaseDialog: FC<LoadDataBaseDialogProps> = ({
	isOpen,
	onClose,
	onLoad
}) => {
	const [input, setInput] = useState('');
	const [file, setFile] = useState('');

	const loadAndClose = (input: string) => {
		if (onLoad(input)) {
			onClose!();
		}
	};
	return (
		<Dialog
			icon='database'
			title='DataBase dump'
			isOpen={isOpen}
			onClose={onClose}
		>
			<div className={Classes.DIALOG_BODY}>
				<p>Copy your database in the following area and click on 'Load' :</p>
				<TextArea
					autoFocus
					id='dump'
					style={{
						width: '100%',
						minHeight: '100px',
						marginBottom: '10px'
					}}
					value={input}
					onChange={event => setInput(event.target.value)}
				/>
				<div className={Classes.DIALOG_FOOTER_ACTIONS}>
					<Button
						text='Load'
						disabled={input.length === 0}
						icon='upload'
						intent={Intent.PRIMARY}
						onClick={() => loadAndClose(input)}
					/>
				</div>
			</div>
			<div className={Classes.DIALOG_FOOTER}>
				<p>OR load from your files :</p>
				<div className={Classes.DIALOG_FOOTER_ACTIONS}>
					<FileInput
						text={file || 'Choose JSON file'}
						buttonText={'Browse'}
						inputProps={{
							id: 'file-input',
							accept: '.json',
							multiple: false,
							onChange: e => setFile(e.currentTarget.value)
						}}
					/>
					<Button
						text='Load from a file'
						icon='folder-open'
						intent={Intent.PRIMARY}
						disabled={file === ''}
						onClick={() => {
							const hie = document.getElementById(
								'file-input'
							) as HTMLInputElement;
							fileReader.onload = () => {
								loadAndClose(fileReader.result as string);
							};
							fileReader.readAsText(hie.files![0]);
						}}
					/>
				</div>
			</div>
		</Dialog>
	);
};
