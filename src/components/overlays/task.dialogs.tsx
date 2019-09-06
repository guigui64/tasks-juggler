import {
	FormGroup,
	HTMLSelect,
	IDialogProps,
	InputGroup,
	NumericInput,
	Slider,
	Switch,
	TextArea
} from '@blueprintjs/core';
import React, { FC, useEffect, useState } from 'react';
import { TASK_DURATION_NONE } from '../../utils/constants';
import { TaskTitleValidity, TTV_OK } from '../../utils/data/database';
import { Project } from '../../utils/types/types';
import Animation from '../animation/animation';
import AddEditDialog from './add-edit.dialog';

type AddEditTaskDialogprops = {
	type: 'add' | 'edit';
	action: (
		projectId: number,
		duration: number,
		title: string,
		desc: string
	) => void;
	taskToEdit?: {
		title: string;
		desc: string;
		duration: number;
	};
	projects: Project[];
	selectedProjectId?: number;
	validateTitle: (
		title: string,
		projectId: number
	) => { valid: TaskTitleValidity; reason?: string };
} & IDialogProps;

const AddEditTaskDialog: FC<AddEditTaskDialogprops> = ({
	type,
	taskToEdit,
	action,
	projects,
	selectedProjectId,
	validateTitle,
	...dialogProps
}) => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [duration, setDuration] = useState(TASK_DURATION_NONE);
	useEffect(() => {
		if (taskToEdit) {
			setTitle(taskToEdit.title);
			setDesc(taskToEdit.desc);
			setDuration(taskToEdit.duration);
		}
	}, [taskToEdit]);
	const [disabled, setDisabled] = useState(type === 'add');
	const [errorMessage, setErrorMessage] = useState('');
	const [selectedProject, setSelectedProject] = useState(0);
	useEffect(() => {
		if (selectedProjectId) {
			setSelectedProject(selectedProjectId >= 0 ? selectedProjectId : 0);
		}
	}, [selectedProjectId]);
	const [durationEnabled, setDurationEnabled] = useState(type === 'edit');
	return (
		<AddEditDialog
			type={type}
			what='task'
			disabled={disabled}
			action={() => action(selectedProject, duration, title, desc)}
			{...dialogProps}
		>
			{type !== 'edit' && (
				<FormGroup
					label='Task project'
					labelFor='project-input'
					labelInfo='(required)'
					inline
				>
					<HTMLSelect
						options={projects.map(p => p.name)}
						value={projects.find(p => p.id === selectedProject)!.name}
						onChange={e => {
							const project = projects.find(
								p => p.name === e.currentTarget.value
							)!.id;
							setSelectedProject(project);
							if (title !== '') {
								const { valid, reason } = validateTitle(title, project);
								setDisabled(valid !== TTV_OK);
								setErrorMessage(reason || '');
							}
						}}
					/>
				</FormGroup>
			)}
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
					value={title}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						const { value } = e.target;
						setTitle(value);
						if (taskToEdit && value === taskToEdit.title) {
							setDisabled(false);
						} else {
							const { valid, reason } = validateTitle(value, selectedProject);
							setDisabled(valid !== TTV_OK);
							setErrorMessage(reason || '');
						}
					}}
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
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
						setDesc(e.target.value)
					}
				/>
			</FormGroup>
			<Switch
				checked={durationEnabled}
				label='Set a duration'
				onChange={() => {
					setDurationEnabled(!durationEnabled);
					setDuration(TASK_DURATION_NONE);
				}}
			/>
			<Animation
				in={durationEnabled}
				timeout={800}
				unmountOnExit
				enteringAnimation='fadeIn fast'
				exitingAnimation='fadeOut fast'
			>
				<FormGroup
					label='Duration'
					labelFor='dur-input'
					labelInfo='in days (optionnal)'
				>
					<NumericInput
						id='dur-input'
						placeholder='Enter number (float) of days here.'
						value={duration}
						min={0}
						max={15}
						stepSize={0.5}
						majorStepSize={1}
						onValueChange={(v: number) => setDuration(v)}
					/>
					<Slider
						min={0}
						max={15}
						stepSize={0.5}
						value={duration} // ? Why doesn't it change when changing the numeric input ?
						onChange={(value: number) => setDuration(value)}
					/>
				</FormGroup>
			</Animation>
		</AddEditDialog>
	);
};

type AddTaskDialogProps = {
	add: (
		title: string,
		desc: string,
		projectId: number,
		duration: number
	) => void;
	validateTitle: (
		title: string,
		projectId: number
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
}) => (
	<AddEditTaskDialog
		type='add'
		action={(
			projectId: number,
			duration: number,
			title: string,
			desc: string
		) => add(title, desc, projectId, duration)}
		projects={projects}
		validateTitle={validateTitle}
		selectedProjectId={selectedProjectId}
		{...dialogProps}
	/>
);

type EditTaskDialogProps = {
	taskId: number;
	taskToEdit: {
		title: string;
		desc: string;
		duration: number;
	};
	edit: (taskId: number, title: string, desc: string, duration: number) => void;
	validateTitle: (
		title: string,
		projectId: number
	) => { valid: TaskTitleValidity; reason?: string };
	projects: Project[];
} & IDialogProps;

export const EditTaskDialog: FC<EditTaskDialogProps> = ({
	taskId,
	taskToEdit,
	edit,
	validateTitle,
	projects,
	...dialogProps
}) => {
	return (
		<AddEditTaskDialog
			type='edit'
			action={(
				projectId: number,
				duration: number,
				title: string,
				desc: string
			) => edit(taskId, title, desc, duration)}
			projects={projects}
			validateTitle={validateTitle}
			taskToEdit={taskToEdit}
			{...dialogProps}
		/>
	);
};
