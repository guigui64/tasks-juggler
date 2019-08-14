import React from 'react';
import {
  Alignment,
  Button,
  Navbar,
  Popover,
  Position,
  Tabs
} from '@blueprintjs/core';

import { ActionsMenu } from './actions.menu';
import { SettingsForm } from './settings.form';
import { ALL_PROJECTS } from '../constants';

export default ({
  theme,
  setTheme,
  dumpDataBase,
  setSelectedProject,
  database,
  selectedProject,
  openDeleteProjAlert,
  openAddProjDialog,
  showOrphan,
  setShowOrphan
}: any) => {
  const settingsForm = (
    <SettingsForm {...{ theme, setTheme, showOrphan, setShowOrphan }} />
  );

  const actionsMenu = (
    <ActionsMenu
      {...{ openAddProjDialog, selectedProject, openDeleteProjAlert, dumpDataBase }}
    />
  );

  const projects = [
    {
      name: 'All',
      id: ALL_PROJECTS
    },
    ...database.projects.map((p: { name: string; id: number; }) => ({ name: p.name, id: p.id }))
  ];

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
          <Button minimal icon='build' text='Actions' />
        </Popover>
        <Popover content={settingsForm} position={Position.BOTTOM}>
          <Button minimal icon='cog' text='Settings' />
        </Popover>
      </Navbar.Group>
    </Navbar>
  );
};
