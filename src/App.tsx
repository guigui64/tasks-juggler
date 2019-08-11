import React, { useState } from 'react';
import './App.css';

import Navbar from './components/navbar.component';
import { Button, Card } from '@blueprintjs/core';
import { NO_PROJECT, ALL_PROJECTS } from './constants';

interface DataBase {
  projects: Project[];
  tasks: Task[];
}
interface Project {
  name: string;
  desc: string;
  id: number;
}

interface Task {
  title: string;
  desc: string;
  id: number;
  projectId: number;
  duration: number; // in days
}

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

const App = () => {
  const [projectInputField, setProjectInputField] = useState('');
  const [projectId, setProjectId] = useState(initialProjectId);
  // const [taskId, setTaskId] = useState(initialTaskId);
  const [selectedProject, setSelectedProject] = useState(ALL_PROJECTS);
  const [database, setDatabase] = useState(initialDataBase);
  const [showOrphan, setShowOrphan] = useState(false);

  const [theme, setTheme] = useState('light');
  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addProject = () => {
    database.projects.push({
      name: projectInputField,
      desc: '',
      id: projectId
    });
    setDatabase(database);
    setProjectId(projectId + 1);
    setProjectInputField('');
  };

  return (
    <div className={(theme === 'dark' ? 'bp3-dark' : '') + ' bp3-fill'}>
      <Navbar
        switchAppTheme={switchTheme}
        dumpDataBase={() => console.log(database)}
        setSelectedProject={setSelectedProject}
        projects={[
          {
            name: 'All',
            id: ALL_PROJECTS
          },
          ...database.projects.map(p => {
            return { name: p.name, id: p.id };
          })
        ]}
      />
      <Card>
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
      </Card>
      <Card>
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
      </Card>
      <Card>
        <h2>Planning</h2>
        {/* TODO create/edit project/task, planning, save/load database (JSON, localstorage...), styles */}
      </Card>
    </div>
  );
};

export default App;
