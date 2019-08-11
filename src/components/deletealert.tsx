import React from 'react';
import { Alert, Intent } from '@blueprintjs/core';

export default ({
  isOpen,
  onCancel,
  onConfirm,
  confirmButtonText,
  deletionTargetName
}: any) => (
  <Alert
    cancelButtonText='Cancel'
    confirmButtonText={confirmButtonText}
    icon='trash'
    intent={Intent.DANGER}
    isOpen={isOpen}
    onCancel={onCancel}
    onConfirm={onConfirm}
    canEscapeKeyCancel={true}
    canOutsideClickCancel={true}
  >
    <p>{`Are you sure you want to delete ${deletionTargetName} ?`}</p>
  </Alert>
);
