import React from 'react';
import {
  Alignment,
  Button,
  Menu,
  Navbar,
  Popover,
  Position,
  Tabs
} from '@blueprintjs/core';

import { ALL_PROJECTS, LIGHT_THEME } from '../constants';

export default ({
  theme,
  switchTheme,
  dumpDataBase,
  setSelectedProject,
  projects,
  selectedProject,
  openDeleteProjAlert,
  openAddProjDialog
}: any) => {
  const settingsMenu = (
    <Menu>
      <Menu.Item
        text={(theme === LIGHT_THEME ? 'Dark' : 'Light') + ' theme'}
        icon={theme === LIGHT_THEME ? 'moon' : 'flash'}
        onClick={switchTheme}
      />
      <Menu.Divider />
      <Menu.Item
        text='Dump database'
        icon='floppy-disk'
        onClick={dumpDataBase}
      />
      <Menu.Item text='TODO' icon='lock' disabled />
    </Menu>
  );

  const actionsMenu = (
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
      <Menu.Item text='Add task' icon='add' />
    </Menu>
  );

  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Tasks Juggler</Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Tabs
          large
          onChange={id => {
            setSelectedProject(id);
          }}
          selectedTabId={selectedProject}
        >
          {projects.map((p: { name: string; id: number }) => (
            <Tabs.Tab title={p.name} id={p.id} />
          ))}
        </Tabs>
        <Navbar.Divider />
        <Popover content={actionsMenu} position={Position.BOTTOM}>
          <Button minimal icon='menu' text='Actions' />
        </Popover>
        <Popover content={settingsMenu} position={Position.BOTTOM}>
          <Button minimal icon='cog' text='Settings' />
        </Popover>
      </Navbar.Group>
    </Navbar>
  );
};
