import { Card, Elevation } from '@blueprintjs/core';
import React, { FC } from 'react';

type TaskCardProps = {
	title: string;
	desc: string;
	duration?: number;
	onClick: () => void;
	selected: boolean;
};

const TaskCard: FC<TaskCardProps> = ({ title, desc, duration, onClick, selected }) => {
	return (
		<Card
			interactive={true}
			elevation={Elevation.TWO}
			className='taskcard animated fadeIn fast' // TODO fadeOut when deleting
			onClick={onClick}
			style={{
				border: `2px solid ${selected ? '#39acac' : 'rgba(0,0,0,0)'}`
			}}
		>
			<h3 className='taskcard'>{title}</h3>
			<p className='taskcard'>{desc}</p>
			{duration && <p className='taskcard'>{`${duration} day(s)`}</p>}
		</Card>
	);
};

export default TaskCard;
