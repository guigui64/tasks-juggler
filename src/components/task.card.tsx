import { Card, Elevation } from '@blueprintjs/core';
import React, { FC } from 'react';

type TaskCardProps = {
	title: string;
	desc: string;
	duration?: number;
};

const TaskCard: FC<TaskCardProps> = ({ title, desc, duration }) => (
	<Card
		interactive={true}
		elevation={Elevation.TWO}
		className='animated fadeIn fast' // TODO fadeOut when deleting
	>
		<h3>{title}</h3>
		<p>{desc}</p>
		{duration && <p>{`${duration} day(s)`}</p>}
	</Card>
);

export default TaskCard;
