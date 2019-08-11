import React, { useState } from 'react';

import {
  Navbar,
  Alignment,
  Button,
  Popover,
  Position,
  Menu,
  Tabs,
  H6
} from '@blueprintjs/core';
import { ALL_PROJECTS } from '../constants';

export default ({
  switchAppTheme,
  dumpDataBase,
  setSelectedProject,
  projects
}: any) => {
  console.log(projects);

  const [theme, setTheme] = useState('light');
  const [selectedProject, selectProject] = useState(ALL_PROJECTS);

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    switchAppTheme();
  };

  const settingsMenu = (
    <Menu>
      <Menu.Item
        text={(theme === 'light' ? 'Dark' : 'Light') + ' theme'}
        icon={theme === 'light' ? 'moon' : 'flash'}
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
      <Menu.Item text='Add project' icon='add' />
      <Menu.Item
        text='Delete current project'
        icon='trash'
        intent='danger'
        disabled={selectedProject === ALL_PROJECTS}
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
            selectProject(id as number);
          }}
        >
          {projects.map((p: { name: string; id: string }) => (
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
