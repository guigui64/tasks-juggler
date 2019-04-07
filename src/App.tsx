import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const NO_PROJECT = -1;
const ALL_PROJECTS = -2;
const NO_SELECTION = -3;

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
  const [taskId, setTaskId] = useState(initialTaskId);
  const [selectedProject, setSelectedProject] = useState(NO_SELECTION);
  const [database, setDatabase] = useState(initialDataBase);
  const [showOrphan, setShowOrphan] = useState(false);

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
    <>
      <h1>Tasks Juggler</h1>
      <button onClick={() => console.log(database)}>Dump database</button>
      <h2>
        Projects
        <button onClick={() => setSelectedProject(ALL_PROJECTS)}>
          Select all
        </button>
      </h2>
      <input
        type='textfield'
        onChange={event => setProjectInputField(event.target.value)}
        value={projectInputField}
      />
      <button onClick={addProject}>Add project</button>
      <ul>
        {database.projects.map(project => {
          let style: any = { cursor: 'pointer' };
          if (
            ALL_PROJECTS === selectedProject ||
            project.id === selectedProject
          )
            style.fontWeight = 'bold';

          return (
            <li key={project.id} style={style}>
              <a
                onClick={() => {
                  setSelectedProject(project.id);
                }}
              >
                {project.name}
                <small> {project.desc}</small>
              </a>
            </li>
          );
        })}
      </ul>
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
        <button onClick={() => setShowOrphan(!showOrphan)}>
          {showOrphan ? 'Hide' : 'Show'}
        </button>
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
      {/* TODO planning, save/load database (JSON, localstorage...), styles */}
    </>
  );
};

export default App;
