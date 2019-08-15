import React, { useState } from 'react';
import { H3 } from '@blueprintjs/core';

import './App.css';

import DeleteAlert from './components/delete.alert';
import AddDialog from './components/add.dialog';
import Navbar from './components/navbar';

import {
	ALL_PROJECTS,
	LIGHT_THEME,
	NO_PROJECT,
	THEME_STORAGE_KEY,
	SHOW_ORPHAN_STORAGE_KEY
} from './constants';
import { DataBase, Project, Task } from './types/types';
import TaskGroup from './components/taskgroup';
import { DumpDatabaseDialog } from './components/database.dialogs';

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
	// Settings states => TODO redux
	const [showOrphan, setShowOrphan] = useState(
		Boolean(localStorage.getItem(SHOW_ORPHAN_STORAGE_KEY) || false)
	);
	const [theme, setTheme] = useState(
		localStorage.getItem(THEME_STORAGE_KEY) || LIGHT_THEME
	);

	// Overlays states
	const [deleteProjAlertOpen, openDeleteProjAlert] = useState(false);
	const [addProjDialogOpen, openAddProjDialog] = useState(false);
	const [dumpDBDialogOpen, openDumpDBDialog] = useState(false);

	// Data states
	const [database, setDatabase] = useState(initialDataBase);
	const [projectId, setProjectId] = useState(initialProjectId);
	const [selectedProject, setSelectedProject] = useState(ALL_PROJECTS);

	const addProject = (name: string) => {
		database.projects.push({
			name: name,
			desc: '',
			id: projectId
		});
		setDatabase(database);
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
		setSelectedProject(ALL_PROJECTS);
	};

	return (
		<div className={theme} id='container'>
			<Navbar
				dumpDataBase={() => openDumpDBDialog(true)}
				{...{
					theme,
					setTheme,
					setSelectedProject,
					database,
					deleteProject,
					selectedProject,
					openDeleteProjAlert,
					openAddProjDialog,
					showOrphan,
					setShowOrphan
				}}
			/>
			<TaskGroup
				title='Tasks'
				tasks={database.tasks}
				selectedProject={selectedProject}
			/>
			{showOrphan && (
				<TaskGroup
					title='Orphan tasks'
					tasks={database.tasks}
					selectedProject={NO_PROJECT}
				/>
			)}
			<div style={{ padding: '50px 50px 0 50px' }}>
				<div style={{ display: 'inline' }}>
					<H3 style={{ display: 'inline-block', marginRight: '10px' }}>
						Planning
					</H3>
				</div>
			</div>
			{/* Overlays : */}
			<DeleteAlert
				confirmButtonText='Delete project'
				isOpen={deleteProjAlertOpen}
				onCancel={() => openDeleteProjAlert(false)}
				onConfirm={() => {
					openDeleteProjAlert(false);
					deleteProject(selectedProject);
				}}
				deletionTargetName={
					selectedProject === ALL_PROJECTS
						? 'ALL => IMPOSSIBLE'
						: database.projects.find((p: Project) => p.id === selectedProject)!
								.name
				}
			/>
			<AddDialog
				isOpen={addProjDialogOpen}
				onClose={() => openAddProjDialog(false)}
				add={() => addProject('Test' + projectId)}
				// TODO project name
			/>
			<DumpDatabaseDialog
				isOpen={dumpDBDialogOpen}
				onClose={() => openDumpDBDialog(false)}
				dump={JSON.stringify(database, null, '\t')}
			/>
		</div>
	);
};

export default App;
