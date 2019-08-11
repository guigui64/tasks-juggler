import React from 'react';
import { Menu } from '@blueprintjs/core';
import { ALL_PROJECTS, LIGHT_THEME } from '../constants';

export const ActionsMenu = ({
  openAddProjDialog,
  selectedProject,
  openDeleteProjAlert
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
    <Menu.Divider title='Tasks' />
    <Menu.Item
      text='Add task'
      icon='add'
      onClick={() => console.log('TODO add task')}
    />
  </Menu>
);

export const SettingsMenu = ({ theme, switchTheme, dumpDataBase }: any) => (
  <Menu>
    <Menu.Item
      text={(theme === LIGHT_THEME ? 'Dark' : 'Light') + ' theme'}
      icon={theme === LIGHT_THEME ? 'moon' : 'flash'}
      onClick={switchTheme}
    />
    <Menu.Divider />
    <Menu.Item text='Dump database' icon='floppy-disk' onClick={dumpDataBase} />
    <Menu.Item text='TODO' icon='lock' disabled />
  </Menu>
);
