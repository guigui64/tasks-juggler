import React from 'react';
import { Dialog, Classes, Tooltip, Button } from '@blueprintjs/core';

export default ({ isOpen, handleClose, handleConfirm }: any) => (
  <Dialog
    isOpen={isOpen}
    icon='info-sign'
    onClose={handleClose}
    title='Palantir Foundry'
  >
    <div className={Classes.DIALOG_BODY}>
      <p>TODO add form</p>
    </div>
    <div className={Classes.DIALOG_FOOTER}>
      <div className={Classes.DIALOG_FOOTER_ACTIONS}>
        <Tooltip content='This button is hooked up to close the dialog.'>
          <Button onClick={handleClose}>Close</Button>
        </Tooltip>
        <Button
          text='Add'
          onClick={() => {
            handleConfirm();
            handleClose();
          }}
        />
      </div>
    </div>
  </Dialog>
);
