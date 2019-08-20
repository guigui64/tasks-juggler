import { Button, ButtonGroup, H3 } from '@blueprintjs/core';
import React, { FC, useState } from 'react';
import Transition, {
	ENTERING,
	EXITING,
	TransitionStatus
} from 'react-transition-group/Transition';
import { ALL_PROJECTS, NO_PROJECT } from '../constants';
import { Task } from '../types/types';
import TaskCard from './task.card';

type TaskGroupProps = {
	title: string;
	tasks: Task[];
	selectedProject: number;
	show?: boolean;
};

const tranClass = (state: TransitionStatus) => {
	switch (state) {
		case ENTERING:
			return 'animated fadeInDown fast';
		case EXITING:
			return 'animated fadeOutUp fast';
		default:
			return '';
	}
};

const TaskGroup: FC<TaskGroupProps> = ({
	title,
	tasks,
	selectedProject,
	show = true
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
		console.log(newSelectedIds);
	};
	return (
		<Transition in={show} timeout={800} unmountOnExit>
			{state => (
				<div
					className={tranClass(state)}
					style={{ padding: '50px 50px 0 50px' }}
				>
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
									(selectedProject === ALL_PROJECTS &&
										t.projectId !== NO_PROJECT)
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
			)}
		</Transition>
	);
};

export default TaskGroup;

// TODO animation when showing/hiding tasks group
