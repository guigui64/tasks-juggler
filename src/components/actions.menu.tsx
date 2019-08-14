import React from 'react';
import { Menu } from '@blueprintjs/core';
import { ALL_PROJECTS } from '../constants';

export const ActionsMenu = ({
  openAddProjDialog,
  selectedProject,
  openDeleteProjAlert,
  dumpDataBase
}: any) => (
  <Menu>
    <Menu.Divider title='Projects' />
    <Menu.Item
      text='Add project'
      icon='add'
      onClick={() => openAddProjDialog(true)}
    />
    <Menu.Item
      text='Delete current project'
      icon='trash'
      intent='danger'
      disabled={selectedProject === ALL_PROJECTS}
      onClick={() => openDeleteProjAlert(true)}
    />
    <Menu.Divider title='Database' />
    <Menu.Item text='Dump database' icon='floppy-disk' onClick={dumpDataBase} />
    <Menu.Item text='Load database (TODO)' icon='database' disabled />
  </Menu>
);
