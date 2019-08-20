import {
	Button,
	Classes,
	Dialog,
	FormGroup,
	IDialogProps,
	InputGroup,
	Intent,
	NumericInput,
	TextArea
} from '@blueprintjs/core';
import React, { FC, useEffect, useState } from 'react';
import {
	NOK_NAME_TAKEN,
	NOK_OTHER,
	OK,
	ProjectNameValidity
} from '../../utils/data/database';
import { Project } from '../../utils/types/types';

type GenericAddEditDialogProps = {
	type: 'add' | 'edit';
	what: string; // type of object to be added or editted
	disabled: boolean;
	action: () => void;
} & IDialogProps;

const AddEditDialog: FC<GenericAddEditDialogProps> = ({
	type,
	what,
	disabled,
	action,
	...dialogProps
}) => (
	<Dialog
		icon={type}
		title={`${type.charAt(0).toUpperCase() + type.slice(1)} ${what}`}
		canOutsideClickClose={false}
		{...dialogProps}
	>
		<div className={Classes.DIALOG_BODY}>{dialogProps.children}</div>
		<div className={Classes.DIALOG_FOOTER}>
			<div className={Classes.DIALOG_FOOTER_ACTIONS}>
				<Button onClick={dialogProps.onClose}>Close</Button>
				<Button
					text={`${type.charAt(0).toUpperCase() + type.slice(1)} ${what}`}
					intent={Intent.PRIMARY}
					onClick={() => {
						action();
						dialogProps.onClose!();
					}}
					disabled={disabled}
				/>
			</div>
		</div>
	</Dialog>
);

type AddEditProjectDialogprops = {
	type: 'add' | 'edit';
	disabled: boolean;
	action: () => void;
	errorMessage: string;
	name: string;
	desc: string;
	onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onDescChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
} & IDialogProps;

const AddEditProjectDialog: FC<AddEditProjectDialogprops> = ({
	type,
	disabled,
	action,
	errorMessage,
	name,
	desc,
	onNameChange,
	onDescChange,
	...dialogProps
}) => (
	<AddEditDialog
		type={type}
		what='project'
		disabled={disabled}
		action={action}
		{...dialogProps}
	>
		<FormGroup
			helperText={errorMessage}
			label='Project name'
			labelFor='name-input'
			labelInfo='(required)'
			inline
		>
			<InputGroup
				id='name-input'
				placeholder='Enter project name here.'
				value={name}
				onChange={onNameChange}
				autoFocus
			/>
		</FormGroup>
		<FormGroup
			label='Description'
			labelFor='desc-input'
			labelInfo='(recommended)'
		>
			<TextArea
				id='desc-input'
				placeholder='Enter a short description of the project here.'
				style={{ width: '100%' }}
				value={desc}
				onChange={onDescChange}
			/>
		</FormGroup>
	</AddEditDialog>
);

type AddProjectDialogProps = {
	add: (name: string, desc: string) => void;
	validateName: (
		name: string
	) => { valid: ProjectNameValidity; reason?: string };
} & IDialogProps;

export const AddProjectDialog: FC<AddProjectDialogProps> = ({
	add,
	validateName,
	...dialogProps
}) => {
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');
	return (
		<AddEditProjectDialog
			type='add'
			disabled={disabled}
			action={() => add(name, desc)}
			errorMessage={errorMessage}
			name={name}
			desc={desc}
			onNameChange={(e: React.ChangeEvent<HTMLInputElement>) => {
				const value = e.target.value;
				setName(value);
				const { valid, reason } = validateName(value);
				setDisabled(valid !== OK);
				setErrorMessage(reason || '');
			}}
			onDescChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
				setDesc(e.target.value)
			}
			{...dialogProps}
		/>
	);
};

type EditProjectDialogProps = {
	project: Project;
	validateName: (
		name: string
	) => { valid: ProjectNameValidity; reason?: string };
	edit: (id: number, name: string, desc: string) => void;
} & IDialogProps;

export const EditProjectDialog: FC<EditProjectDialogProps> = ({
	project,
	validateName,
	edit,
	...dialogProps
}) => {
	const [name, setName] = useState('ERROR');
	const [desc, setDesc] = useState('ERROR');
	useEffect(() => {
		if (project) {
			setName(project.name);
			setDesc(project.desc);
		}
	}, [project]);
	const [disabled, setDisabled] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');
	const update = (newName: string, newDesc: string) => {
		let { valid, reason } = validateName(newName);
		if (valid === NOK_NAME_TAKEN && newName === project.name) {
			// Accept same name if same project but desc has changed
			if (newDesc !== project.desc) {
				valid = OK;
				reason = '';
			} else {
				valid = NOK_OTHER;
				reason = 'Nothing changed...';
			}
		}
		setDisabled(valid !== OK);
		setErrorMessage(reason || '');
	};
	return (
		<AddEditProjectDialog
			type='edit'
			disabled={disabled}
			action={() => edit(project.id, name, desc)}
			errorMessage={errorMessage}
			name={name}
			desc={desc}
			onNameChange={(e: React.ChangeEvent<HTMLInputElement>) => {
				const value = e.target.value;
				setName(value);
				update(value, desc);
			}}
			onDescChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
				setDesc(e.target.value);
				update(name, e.target.value);
			}}
			{...dialogProps}
		/>
	);
};

type AddEditTaskDialogprops = {
	type: 'add' | 'edit';
	disabled: boolean;
	action: () => void;
	errorMessage: string;
	taskTitle: string;
	desc: string;
	duration: number;
	onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onDescChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onDurationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & IDialogProps;

const AddEditTaskDialog: FC<AddEditTaskDialogprops> = ({
	type,
	disabled,
	action,
	errorMessage,
	taskTitle,
	desc,
	duration,
	onTitleChange,
	onDescChange,
	onDurationChange,
	...dialogProps
}) => (
	<AddEditDialog
		type={type}
		what='task'
		disabled={disabled}
		action={action}
		{...dialogProps}
	>
		<FormGroup
			helperText={errorMessage}
			label='Task title'
			labelFor='title-input'
			labelInfo='(required)'
			inline
		>
			<InputGroup
				id='title-input'
				placeholder='Enter task title here.'
				value={taskTitle}
				onChange={onTitleChange}
			/>
		</FormGroup>
		<FormGroup
			label='Description'
			labelFor='desc-input'
			labelInfo='(recommended)'
		>
			<TextArea
				id='desc-input'
				placeholder='Enter a short description of the task here.'
				style={{ width: '100%' }}
				value={desc}
				onChange={onDescChange}
			/>
		</FormGroup>
		<FormGroup label='Duration' labelFor='dur-input' labelInfo='(optionnal)'>
			<NumericInput
				id='dur-input'
				placeholder='Enter number (float) of days here.'
				//style={{ width: '100%' }}
				value={duration}
				onChange={onDurationChange}
			/>
		</FormGroup>
	</AddEditDialog>
);

type AddTaskDialogProps = {
	add: (title: string, desc: string, duration: number | undefined) => void;
	// validateName: (
	// 	name: string
	// ) => { valid: ProjectNameValidity; reason?: string };
} & IDialogProps;

export const AddTaskDialog: FC<AddTaskDialogProps> = ({
	add,
	// validateName,
	...dialogProps
}) => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [duration, setDuration] = useState(0); // TODO switch to enable + slider ?
	const [disabled, setDisabled] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');
	return (
		<AddEditTaskDialog
			type='add'
			disabled={disabled}
			action={() => add(title, desc, duration)}
			errorMessage={errorMessage}
			taskTitle={title}
			desc={desc}
			duration={duration}
			onTitleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
				const value = e.target.value;
				setTitle(value);
				// const { valid, reason } = validateName(value);
				// setDisabled(valid !== OK);
				// setErrorMessage(reason || '');
			}}
			onDescChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
				setDesc(e.target.value)
			}
			onDurationChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
			{...dialogProps}
		/>
	);
};
