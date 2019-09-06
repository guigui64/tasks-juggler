import { ButtonGroup, H3, Position } from '@blueprintjs/core';
import React, { Dispatch, FC } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { selectTask, unselectTask } from '../../store/tasks/actions';
import { TasksActionTypes } from '../../store/tasks/types';
import { ALL_PROJECTS, NO_PROJECT } from '../../utils/constants';
import { Task } from '../../utils/types/types';
import Animation from '../animation/animation';
import TooltippedButton from '../tooltippedbutton/tooltippedbutton';
import TaskCard from './task.card';

type TaskGroupStateProps = {
	showButtonText: boolean;
	selectedIds: number[];
	smallScreen: boolean;
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
	openEditTaskDialog: (open: boolean) => void;
	openDeleteTaskAlert: (open: boolean) => void;
} & TaskGroupStateProps &
	TaskGroupDispatchProps;

const TaskGroup: FC<TaskGroupProps> = ({
	title,
	tasks,
	selectedProject,
	show = true,
	openAddTaskDialog,
	openEditTaskDialog,
	openDeleteTaskAlert,
	showButtonText,
	selectedIds,
	selectTask,
	unselectTask,
	smallScreen
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
					<TooltippedButton
						text={smallScreen ? 'Add' : 'Add task'}
						position={Position.TOP}
						showButtonText={showButtonText}
						buttonProps={{
							icon: 'add',
							onClick: () => openAddTaskDialog(true)
						}}
					/>
				</ButtonGroup>
				<ButtonGroup>
					<Animation
						in={filteredTasks.some(({ id }) => selectedIds.includes(id))}
						timeout={800}
						unmountOnExit
						customStyle={{ display: 'inline' }}
						enteringAnimation='fadeInLeft fast'
						exitingAnimation='fadeOutLeft fast'
					>
						<div style={{ display: 'inline-block' }}>
							<TooltippedButton
								text={smallScreen ? 'Edit' : 'Edit task'}
								disabled={
									filteredTasks.filter(({ id }) => selectedIds.includes(id))
										.length > 1
								}
								position={Position.TOP}
								showButtonText={showButtonText}
								buttonProps={{
									icon: 'edit',
									onClick: () => {
										openEditTaskDialog(true);
									}
								}}
							/>
						</div>
						<div style={{ display: 'inline-block' }}>
							<TooltippedButton
								text={
									smallScreen
										? 'Delete'
										: 'Delete task' +
										  (filteredTasks.filter(({ id }) =>
												selectedIds.includes(id)
										  ).length > 1
												? 's'
												: '')
								}
								position={Position.TOP}
								showButtonText={showButtonText}
								buttonProps={{
									icon: 'trash',
									onClick: () => {
										// trick : unselect tasks not in the current task group before deletion
										tasks
											.filter(
												t =>
													t.projectId !== selectedProject &&
													(selectedProject === ALL_PROJECTS &&
														t.projectId === NO_PROJECT)
											)
											.map(t => t.id)
											.forEach(id => unselectTask(id));
										openDeleteTaskAlert(true);
									}
								}}
							/>
						</div>
						<div style={{ display: 'inline-block' }}>
							<TooltippedButton
								text='Select all'
								position={Position.TOP}
								showButtonText={showButtonText}
								buttonProps={{
									icon: 'multi-select',
									onClick: () =>
										filteredTasks.forEach(({ id }) => selectTask(id))
								}}
								disabled={
									filteredTasks.every(({ id }) => !selectedIds.includes(id)) ||
									filteredTasks.every(({ id }) => selectedIds.includes(id))
								}
							/>
						</div>
						<div style={{ display: 'inline-block' }}>
							<TooltippedButton
								text={smallScreen ? 'Clear' : 'Clear selection'}
								position={Position.TOP}
								showButtonText={showButtonText}
								buttonProps={{
									icon: 'eraser',
									onClick: () =>
										filteredTasks.forEach(({ id }) => unselectTask(id))
								}}
							/>
						</div>
					</Animation>
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
				{filteredTasks.map(task => {
					let { title, desc, duration, id } = task;
					return (
						<TaskCard
							{...{ title, desc, duration }}
							key={id}
							onClick={() =>
								selectedIds.includes(id) ? unselectTask(id) : selectTask(id)
							}
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
	selectedIds: state.tasks.selected,
	smallScreen: state.window.smallScreen
});

const mapDispatchToProps = (
	dispatch: Dispatch<TasksActionTypes>
): TaskGroupDispatchProps => ({
	selectTask: (id: number) => dispatch(selectTask(id)),
	unselectTask: (id: number) => dispatch(unselectTask(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskGroup);
