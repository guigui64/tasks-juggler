import React from 'react';
import { Dialog, Classes, Tooltip, Button } from '@blueprintjs/core';

export default ({ add, ...dialogProps }: any) => (
  <Dialog icon='info-sign' title='Palantir Foundry' {...dialogProps}>
    <div className={Classes.DIALOG_BODY}>
      <p>TODO add form</p>
    </div>
    <div className={Classes.DIALOG_FOOTER}>
      <div className={Classes.DIALOG_FOOTER_ACTIONS}>
        <Tooltip content='This button is hooked up to close the dialog.'>
          <Button onClick={dialogProps.onClose}>Close</Button>
        </Tooltip>
        <Button
          text='Add'
          onClick={() => {
            add();
            dialogProps.onClose();
          }}
        />
      </div>
    </div>
  </Dialog>
);
