import React from 'react';
import {
  Alignment,
  Button,
  Navbar,
  Popover,
  Position,
  Tabs
} from '@blueprintjs/core';

import { ActionsMenu, SettingsMenu } from './menus';

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
    <SettingsMenu {...{ theme, switchTheme, dumpDataBase }} />
  );

  const actionsMenu = (
    <ActionsMenu
      {...{ openAddProjDialog, selectedProject, openDeleteProjAlert }}
    />
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
            <Tabs.Tab title={p.name} id={p.id} key={p.id} />
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
