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
	disabled: boolean;
	action: (projectId: number, duration: number) => void;
	errorMessage: string;
	taskTitle: string;
	desc: string;
	projects: Project[];
	selectedProject: number;
	setSelectedProject: (id: number) => void;
	onTitleChange: (title: string) => void;
	onDescChange: (desc: string) => void;
} & IDialogProps;

const AddEditTaskDialog: FC<AddEditTaskDialogprops> = ({
	type,
	disabled,
	action,
	errorMessage,
	taskTitle,
	desc,
	projects,
	selectedProject,
	setSelectedProject,
	onTitleChange,
	onDescChange,
	...dialogProps
}) => {
	const [durationEnabled, setDurationEnabled] = useState(false);
	const [duration, setDuration] = useState(TASK_DURATION_NONE);
	return (
		<AddEditDialog
			type={type}
			what='task'
			disabled={disabled}
			action={() => action(selectedProject, duration)}
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
					onChange={e => {
						setSelectedProject(
							projects.find(p => p.name === e.currentTarget.value)!.id
						);
					}}
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
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						onTitleChange(e.target.value)
					}
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
						onDescChange(e.target.value)
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
		duration: number | undefined
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
}) => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');
	const [selectedProject, setSelectedProject] = useState(0);
	useEffect(() => {
		setSelectedProject(selectedProjectId >= 0 ? selectedProjectId : 0);
	}, [selectedProjectId]);
	return (
		<AddEditTaskDialog
			type='add'
			disabled={disabled}
			action={(projectId: number, duration: number) =>
				add(title, desc, projectId, duration)
			}
			errorMessage={errorMessage}
			taskTitle={title}
			desc={desc}
			projects={projects}
			selectedProject={selectedProject}
			setSelectedProject={(project: number) => {
				setSelectedProject(project);
				if (title !== '') {
					const { valid, reason } = validateTitle(title, project);
					setDisabled(valid !== TTV_OK);
					setErrorMessage(reason || '');
				}
			}}
			onTitleChange={(value: string) => {
				setTitle(value);
				const { valid, reason } = validateTitle(value, selectedProject);
				setDisabled(valid !== TTV_OK);
				setErrorMessage(reason || '');
			}}
			onDescChange={(value: string) => setDesc(value)}
			{...dialogProps}
		/>
	);
};
