import React, { FC } from 'react';
import { Alert, Intent, IAlertProps } from '@blueprintjs/core';

type DeleteAlertProps = {
	deletionTargetName: string;
} & IAlertProps;

const DeleteAlert: FC<DeleteAlertProps> = ({
	deletionTargetName,
	...alertProps
}) => (
	<Alert
		cancelButtonText='Cancel'
		icon='trash'
		intent={Intent.DANGER}
		canEscapeKeyCancel={true}
		canOutsideClickCancel={true}
		{...alertProps}
	>
		<p>{`Are you sure you want to delete ${deletionTargetName} ?`}</p>
	</Alert>
);

export default DeleteAlert;
