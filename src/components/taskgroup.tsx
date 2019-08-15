import React, { FunctionComponent } from 'react';
import { Task } from '../types/types';
import { ALL_PROJECTS, NO_PROJECT } from '../constants';
import TaskCard from './task.card';
import { H3, ButtonGroup, Button } from '@blueprintjs/core';

type TaskGroupProps = {
	title: string;
	tasks: Task[];
	selectedProject: number;
};

const TaskGroup: FunctionComponent<TaskGroupProps> = ({
	title,
	tasks,
	selectedProject
}) => (
	<div style={{ padding: '50px 50px 0 50px' }}>
		<div style={{ display: 'inline' }}>
			<H3 style={{ display: 'inline-block', marginRight: '10px' }}>{title}</H3>
			<ButtonGroup>
				{/* TODO add and delete task */}
				<Button
					text='Add task'
					icon='add'
					onClick={() => console.log('TODO add task')}
				/>
				<Button
					text='Delete tasks'
					icon='trash'
					onClick={() => console.log('TODO delete tasks')}
				/>
			</ButtonGroup>
		</div>
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
				gridGap: '20px'
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
					return <TaskCard {...{ title, desc, duration }} key={id} />;
				})}
		</div>
	</div>
);

export default TaskGroup;

// TODO animation when showing/hiding tasks group
