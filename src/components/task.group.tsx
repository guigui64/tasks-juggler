import { Button, ButtonGroup, H3 } from '@blueprintjs/core';
import React, { FC, useState } from 'react';
import { ALL_PROJECTS, NO_PROJECT } from '../constants';
import { Task } from '../types/types';
import TaskCard from './task.card';

type TaskGroupProps = {
	title: string;
	tasks: Task[];
	selectedProject: number;
};

const TaskGroup: FC<TaskGroupProps> = ({ title, tasks, selectedProject }) => {
	const [selectedIds, setSelectedIds] = useState([] as number[]);
	const selectId = (id: number) => {
		let newSelectedIds = [...selectedIds]; // shallow copy
		if (newSelectedIds.includes(id)) {
			newSelectedIds = selectedIds.filter(s => s !== id);
		} else {
			newSelectedIds.push(id);
		}
		setSelectedIds(newSelectedIds);
		console.log(newSelectedIds);
	};
	return (
		<div style={{ padding: '50px 50px 0 50px' }}>
			<div style={{ display: 'inline' }}>
				<H3 style={{ display: 'inline-block', marginRight: '10px' }}>
					{title}
				</H3>
				<ButtonGroup>
					{/* TODO add and delete task */}
					<Button
						text='Add task'
						icon='add'
						onClick={() => console.log('TODO add task')}
					/>
					<Button
						text={'Delete task' + (selectedIds.length !== 1 ? 's' : '')}
						icon='trash'
						onClick={() => console.log('TODO delete tasks')}
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
		</div>
	);
};

export default TaskGroup;

// TODO animation when showing/hiding tasks group
