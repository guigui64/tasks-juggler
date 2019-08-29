import {
	FormGroup,
	HTMLSelect,
	IDialogProps,
	InputGroup,
	NumericInput,
	TextArea
} from '@blueprintjs/core';
import React, { FC, useEffect, useState } from 'react';
import { TaskTitleValidity, TTV_OK } from '../../utils/data/database';
import { Project } from '../../utils/types/types';
import AddEditDialog from './add-edit.dialog';

type AddEditTaskDialogprops = {
	type: 'add' | 'edit';
	disabled: boolean;
	action: (projectId: number) => void;
	errorMessage: string;
	taskTitle: string;
	desc: string;
	duration: number;
	projects: Project[];
	selectedProjectId: number;
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
	projects,
	selectedProjectId,
	onTitleChange,
	onDescChange,
	onDurationChange,
	...dialogProps
}) => {
	const [selectedProject, setSelectedProject] = useState(0);
	useEffect(() => {
		setSelectedProject(selectedProjectId >= 0 ? selectedProjectId : 0);
	}, [selectedProjectId]);
	return (
		<AddEditDialog
			type={type}
			what='task'
			disabled={disabled}
			action={() => action(selectedProject)}
			{...dialogProps}
		>
			<FormGroup
				label='Task project'
				labelFor='project-input'
				labelInfo='(required)'
				inline
			>
				<HTMLSelect
					options={projects.map(p => p.name)}
					value={projects.find(p => p.id === selectedProject)!.name}
					onChange={e =>
						setSelectedProject(
							projects.find(p => p.name === e.currentTarget.value)!.id
						)
					}
				/>
			</FormGroup>
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
};

type AddTaskDialogProps = {
	add: (
		title: string,
		desc: string,
		projectId: number,
		duration: number | undefined
	) => void;
	validateTitle: (
		title: string
	) => { valid: TaskTitleValidity; reason?: string };
	projects: Project[];
	selectedProjectId: number;
} & IDialogProps;

export const AddTaskDialog: FC<AddTaskDialogProps> = ({
	add,
	validateTitle,
	projects,
	selectedProjectId,
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
			action={(projectId: number) => add(title, desc, projectId, duration)}
			errorMessage={errorMessage}
			taskTitle={title}
			desc={desc}
			duration={duration}
			projects={projects}
			selectedProjectId={selectedProjectId}
			onTitleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
				const value = e.target.value;
				setTitle(value);
				const { valid, reason } = validateTitle(value);
				setDisabled(valid !== TTV_OK);
				setErrorMessage(reason || '');
			}}
			onDescChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
				setDesc(e.target.value)
			}
			onDurationChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
			{...dialogProps}
		/>
	);
};
