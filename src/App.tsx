import React, { useState } from 'react';
import { Button } from '@blueprintjs/core';

import './App.css';

import DeleteAlert from './components/deletealert';
import AddDialog from './components/adddialog';
import Navbar from './components/navbar';

import {
  ALL_PROJECTS,
  DARK_THEME,
  LIGHT_THEME,
  NO_PROJECT,
  THEME_STORAGE_KEY
} from './constants';
import { DataBase, Project, Task } from './types/types';

let initialProjectId = 0;
let initialTaskId = 0;
const initialDataBase: DataBase = {
  projects: [
    { name: 'Toto', desc: 'toto project', id: initialProjectId++ },
    { name: 'Titi', desc: 'titi project', id: initialProjectId++ }
  ],
  tasks: [
    {
      title: 'ZombieTask',
      desc: 'I have no project...',
      id: initialTaskId++,
      projectId: NO_PROJECT,
      duration: 1
    },
    {
      title: 'TotoTask1',
      desc: 'task 1 of toto project',
      id: initialTaskId++,
      projectId: 0,
      duration: 0.5
    },
    {
      title: 'TotoTask2',
      desc: 'task 2 of toto project',
      id: initialTaskId++,
      projectId: 0,
      duration: 1
    },
    {
      title: 'TitiTask',
      desc: 'task 1 of titi project',
      id: initialTaskId++,
      projectId: 1,
      duration: 1
    }
  ]
};

const setLocalTheme = (theme: string) => {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

const getLocalTheme = (): string | null => {
  return localStorage.getItem(THEME_STORAGE_KEY);
};

const App = () => {
  const [projectId, setProjectId] = useState(initialProjectId);
  // const [taskId, setTaskId] = useState(initialTaskId);
  const [selectedProject, setSelectedProject] = useState(ALL_PROJECTS);
  const [database, setDatabase] = useState(initialDataBase);
  const [showOrphan, setShowOrphan] = useState(false);

  const [theme, setTheme] = useState(getLocalTheme() || LIGHT_THEME);
  const switchTheme = () => {
    const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    setTheme(newTheme);
    setLocalTheme(newTheme);
  };

  const [projToDisplay, setProjToDisplay] = useState([
    {
      name: 'All',
      id: ALL_PROJECTS
    },
    ...database.projects.map(p => ({ name: p.name, id: p.id }))
  ]);
  const [deleteProjAlertOpen, openDeleteProjAlert] = useState(false);
  const [addProjDialogOpen, openAddProjDialog] = useState(false);

  const addProject = (name: string) => {
    database.projects.push({
      name: name,
      desc: '',
      id: projectId
    });
    setDatabase(database);
    setProjToDisplay([
      {
        name: 'All',
        id: ALL_PROJECTS
      },
      ...database.projects.map(p => ({ name: p.name, id: p.id }))
    ]);
    setSelectedProject(projectId);
    setProjectId(projectId + 1);
  };

  const deleteProject = (projectId: number) => {
    database.projects = database.projects.filter(
      (p: Project) => p.id !== projectId
    );
    database.tasks.forEach(
      (t: Task) => t.projectId === projectId && (t.projectId = NO_PROJECT)
    );
    setDatabase(database);
    setProjToDisplay([
      {
        name: 'All',
        id: ALL_PROJECTS
      },
      ...database.projects.map(p => ({ name: p.name, id: p.id }))
    ]);
    setSelectedProject(ALL_PROJECTS);
  };

  const deleteProjectAlert = (
    <DeleteAlert
      confirmButtonText='Delete project'
      isOpen={deleteProjAlertOpen}
      onCancel={() => openDeleteProjAlert(false)}
      onConfirm={() => {
        openDeleteProjAlert(false);
        deleteProject(selectedProject);
      }}
      deletionTargetName={
        projToDisplay.find(
          (p: { name: string; id: number }) => p.id === selectedProject
        )!.name
      }
    />
  );

  const addProjectDialog = (
    <AddDialog
      isOpen={addProjDialogOpen}
      handleConfirm={() => addProject('Test' + projectId)}
      handleClose={() => openAddProjDialog(false)}
    />
  );

  return (
    <div className={theme} id='container'>
      <Navbar
        theme={theme}
        switchTheme={switchTheme}
        dumpDataBase={() => console.log(database)}
        setSelectedProject={setSelectedProject}
        projects={projToDisplay}
        deleteProject={deleteProject}
        selectedProject={selectedProject}
        openDeleteProjAlert={openDeleteProjAlert}
        openAddProjDialog={openAddProjDialog}
      />
      <div id='content'>
        <h2>Tasks</h2>
        <ul>
          {database.tasks
            .filter(
              t =>
                t.projectId === selectedProject ||
                (selectedProject === ALL_PROJECTS && t.projectId !== NO_PROJECT)
            )
            .map(task => (
              <li key={task.id}>
                {task.title}
                <small>
                  {' '}
                  {task.desc} -- ({task.duration} days)
                </small>
              </li>
            ))}
        </ul>
        <h3>
          Orphan tasks
          <Button onClick={() => setShowOrphan(!showOrphan)}>
            {showOrphan ? 'Hide' : 'Show'}
          </Button>
        </h3>
        {showOrphan && (
          <ul>
            {database.tasks
              .filter(t => t.projectId === NO_PROJECT)
              .map(task => (
                <li key={task.id}>
                  {task.title}
                  <small>
                    {' '}
                    {task.desc} -- ({task.duration} days)
                  </small>
                </li>
              ))}
          </ul>
        )}
        <h2>Planning</h2>
        {/* TODO create/edit project/task, planning, save/load database (JSON, localstorage...), styles */}
      </div>
      {deleteProjectAlert}
      {addProjectDialog}
    </div>
  );
};

export default App;
