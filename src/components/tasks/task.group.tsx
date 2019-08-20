import { Button, ButtonGroup, H3 } from '@blueprintjs/core';
import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { ALL_PROJECTS, NO_PROJECT } from '../../utils/constants';
import { Task } from '../../utils/types/types';
import Animation from '../animation/animation';
import TaskCard from './task.card';

type TaskGroupStateProps = {
	showButtonText: boolean;
};

type TaskGroupProps = {
	title: string;
	tasks: Task[];
	selectedProject: number;
	show?: boolean;
	openAddTaskDialog: (open: boolean) => void;
	openDeleteTaskAlert: (open: boolean) => void;
} & TaskGroupStateProps;

const TaskGroup: FC<TaskGroupProps> = ({
	title,
	tasks,
	selectedProject,
	show = true,
	openAddTaskDialog,
	openDeleteTaskAlert,
	showButtonText
}) => {
	const [selectedIds, setSelectedIds] = useState([] as number[]);
	const selectId = (id: number) => {
		let newSelectedIds = [...selectedIds]; // shallow copy
		if (newSelectedIds.includes(id)) {
			newSelectedIds = selectedIds.filter(s => s !== id);
		} else {
			newSelectedIds.push(id);
		}
		setSelectedIds(newSelectedIds);
	};
	return (
		<Animation
			in={show}
			timeout={800}
			unmountOnExit
			customStyle={{ padding: '50px 50px 0 50px' }}
			enteringAnimation='fadeInDown fast'
			exitingAnimation='fadeOutUp fast'
		>
			<div style={{ display: 'inline' }}>
				<H3 style={{ display: 'inline-block', marginRight: '10px' }}>
					{title}
				</H3>
				<ButtonGroup>
					{/* TODO add and delete task actions */}
					<Button
						text={showButtonText && 'Add task'}
						icon='add'
						onClick={() => openAddTaskDialog(true)}
					/>
					<Button
						text={
							showButtonText &&
							'Delete task' + (selectedIds.length !== 1 ? 's' : '')
						}
						icon='trash'
						onClick={() => openDeleteTaskAlert(true)}
						disabled={selectedIds.length === 0}
					/>
				</ButtonGroup>
			</div>
			<div
				style={{
					marginTop: '10px',
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
					gridGap: '10px'
				}}
			>
				{tasks
					.filter(
						t =>
							t.projectId === selectedProject ||
							(selectedProject === ALL_PROJECTS && t.projectId !== NO_PROJECT)
					)
					.map(task => {
						let { title, desc, duration, id } = task;
						return (
							<TaskCard
								{...{ title, desc, duration }}
								key={id}
								onClick={() => selectId(id)}
							/>
						);
					})}
			</div>
		</Animation>
	);
};

const mapStateToProps = (state: AppState): TaskGroupStateProps => ({
	showButtonText: state.settings.showButtonText
});

export default connect(mapStateToProps)(TaskGroup);
