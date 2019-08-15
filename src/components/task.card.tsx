import React, { FunctionComponent } from 'react';
import { Card, Elevation } from '@blueprintjs/core';

type TaskCardProps = {
	title: string;
	desc: string;
	duration?: number;
};

const TaskCard: FunctionComponent<TaskCardProps> = ({
	title,
	desc,
	duration
}) => (
	<Card interactive={true} elevation={Elevation.TWO}>
		<h3>{title}</h3>
		<p>{desc}</p>
		{duration && <p>{`${duration} day(s)`}</p>}
	</Card>
);

export default TaskCard;
