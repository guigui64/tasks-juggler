import { Button, ButtonGroup, H3 } from '@blueprintjs/core';
import React, { FC, Dispatch } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { ALL_PROJECTS, NO_PROJECT } from '../../utils/constants';
import { Task } from '../../utils/types/types';
import Animation from '../animation/animation';
import TaskCard from './task.card';
import { TasksActionTypes } from '../../store/tasks/types';
import { selectTask, unselectTask } from '../../store/tasks/actions';

type TaskGroupStateProps = {
	showButtonText: boolean;
	selectedIds: number[];
};

type TaskGroupDispatchProps = {
	selectTask: (id: number) => void;
	unselectTask: (id: number) => void;
};

type TaskGroupProps = {
	title: string;
	tasks: Task[];
	selectedProject: number;
	show?: boolean;
	openAddTaskDialog: (open: boolean) => void;
	openDeleteTaskAlert: (open: boolean) => void;
} & TaskGroupStateProps & TaskGroupDispatchProps;

const TaskGroup: FC<TaskGroupProps> = ({
	title,
	tasks,
	selectedProject,
	show = true,
	openAddTaskDialog,
	openDeleteTaskAlert,
	showButtonText,
	selectedIds,
	selectTask,
	unselectTask
}) => {
	const filteredTasks = tasks.filter(
		t =>
			t.projectId === selectedProject ||
			(selectedProject === ALL_PROJECTS && t.projectId !== NO_PROJECT)
	);
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
							'Delete task' + (filteredTasks.filter(({id}) => selectedIds.includes(id)).length > 1 ? 's' : '')
						}
						icon='trash'
						// TODO /!\ when deleting selected tasks, only delete and unselect those related to this group /!\
						onClick={() => openDeleteTaskAlert(true)}
						disabled={filteredTasks.every(({id}) => !selectedIds.includes(id))}
					/>
					<Button
						text={showButtonText && 'Select all'}
						icon='multi-select'
						onClick={() => filteredTasks.forEach(({id}) => selectTask(id))}
						disabled={
							filteredTasks.every(({id}) => !selectedIds.includes(id))
							|| filteredTasks.every(({id}) => selectedIds.includes(id))
						}
					/>
					<Button
						text={showButtonText && 'Clear selection'}
						icon='eraser'
						onClick={() => filteredTasks.forEach(({id}) => unselectTask(id))}
						disabled={!filteredTasks.some(({id}) => selectedIds.includes(id))}
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
				{filteredTasks
					.map(task => {
						let { title, desc, duration, id } = task;
						return (
							<TaskCard
								{...{ title, desc, duration }}
								key={id}
								onClick={() => (selectedIds.includes(id) ? unselectTask(id) : selectTask(id))}
								selected={selectedIds.includes(id)}
							/>
						);
					})}
			</div>
		</Animation>
	);
};

const mapStateToProps = (state: AppState): TaskGroupStateProps => ({
	showButtonText: state.settings.showButtonText,
	selectedIds: state.tasks.selected
});

const mapDispatchToProps = (
	dispatch: Dispatch<TasksActionTypes>
): TaskGroupDispatchProps => ({
	selectTask: (id: number) => dispatch(selectTask(id)),
	unselectTask: (id: number) => dispatch(unselectTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskGroup);
