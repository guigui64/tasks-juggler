import React, { FunctionComponent } from 'react';
import { Card, Elevation } from '@blueprintjs/core';

const TaskCard: FunctionComponent<{
	title: string;
	desc: string;
	duration?: number;
}> = ({ title, desc, duration }) => (
	<Card interactive={true} elevation={Elevation.TWO}>
		<h3>{title}</h3>
		<p>{desc}</p>
		{duration && <p>{`${duration} day(s)`}</p>}
	</Card>
);

export default TaskCard;
