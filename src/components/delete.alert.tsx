import React from 'react';
import { Alert, Intent } from '@blueprintjs/core';

export default ({ deletionTargetName, ...alertProps }: any) => (
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
