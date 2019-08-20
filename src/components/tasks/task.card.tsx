import { Card, Elevation } from '@blueprintjs/core';
import React, { FC, useState } from 'react';

type TaskCardProps = {
	title: string;
	desc: string;
	duration?: number;
	onClick: () => void;
};

const TaskCard: FC<TaskCardProps> = ({ title, desc, duration, onClick }) => {
	const [selected, select] = useState(false);
	return (
		<Card
			interactive={true}
			elevation={Elevation.TWO}
			className='animated fadeIn fast' // TODO fadeOut when deleting
			onClick={() => {
				select(!selected);
				onClick();
			}}
			style={{
				border: `2px solid ${selected ? '#39acac' : 'rgba(0,0,0,0)'}`
			}}
		>
			<h3>{title}</h3>
			<p>{desc}</p>
			{duration && <p>{`${duration} day(s)`}</p>}
		</Card>
	);
};

export default TaskCard;
