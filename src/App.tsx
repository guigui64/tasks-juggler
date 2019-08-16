import React, { useState, FC } from 'react';
import { H3, IIntentProps, Intent, IToaster } from '@blueprintjs/core';

import './App.css';

import DeleteAlert from './components/delete.alert';
import AddDialog from './components/add.dialog';
import Navbar from './components/navbar';

import {
	ALL_PROJECTS,
	LIGHT_THEME,
	NO_PROJECT,
	THEME_STORAGE_KEY,
	SHOW_ORPHAN_STORAGE_KEY,
	DATABASE_STORAGE_KEY
} from './constants';
import { DataBase, Project, Task } from './types/types';
import TaskGroup from './components/task.group';
import {
	DumpDataBaseDialog,
	LoadDataBaseDialog
} from './components/database.dialogs';
import ReactDOM from 'react-dom';
import {
	createFakeDataBase,
	validateDB,
	getNextProjectId
} from './data/database';
import { Transition } from 'react-transition-group';
import {
	ENTERING,
	EXITING,
	TransitionStatus
} from 'react-transition-group/Transition';

type AppProps = {
	toaster: IToaster;
};

const App: FC<AppProps> = ({ toaster }) => {
	// Settings states
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
	const [loadDBDialogOpen, openLoadDBDialog] = useState(false);

	// Data states
	const localDBStr = localStorage.getItem(DATABASE_STORAGE_KEY);
	let localDB: DataBase | undefined;
	if (localDBStr) {
		try {
			localDB = JSON.parse(localDBStr);
		} catch (error) {}
	}
	const [dataBase, setDataBase] = useState(localDB || createFakeDataBase());
	const updateDataBase = (db: DataBase) => {
		setDataBase(db);
		localStorage.setItem(DATABASE_STORAGE_KEY, JSON.stringify(db));
	};
	const [selectedProject, setSelectedProject] = useState(ALL_PROJECTS);

	const addProject = (name: string) => {
		const projectId = getNextProjectId(dataBase);
		dataBase.projects.push({
			name: name,
			desc: '',
			id: projectId
		});
		updateDataBase(dataBase);
		setSelectedProject(projectId);
	};

	const deleteProject = (projectId: number) => {
		dataBase.projects = dataBase.projects.filter(
			(p: Project) => p.id !== projectId
		);
		dataBase.tasks.forEach(
			(t: Task) => t.projectId === projectId && (t.projectId = NO_PROJECT)
		);
		updateDataBase(dataBase);
		setSelectedProject(ALL_PROJECTS);
	};

	ReactDOM.createPortal(toaster, document.getElementById('root')!);
	const addToast = (message: string, intent: IIntentProps['intent']) => {
		toaster.show({ message, intent });
	};

	// TODO move it in taskgroup
	const tranClass = (state: TransitionStatus) => {
		switch (state) {
			case ENTERING:
				return 'animated fadeInDown fast';
			case EXITING:
				return 'animated fadeOutUp fast';
			default:
				return '';
		}
	};

	return (
		<div className={theme} id='container'>
			<Navbar
				dumpDataBase={() => openDumpDBDialog(true)}
				loadDataBase={() => openLoadDBDialog(true)}
				{...{
					theme,
					setTheme,
					setSelectedProject,
					dataBase,
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
				tasks={dataBase.tasks}
				selectedProject={selectedProject}
			/>
			<Transition in={showOrphan} timeout={800} unmountOnExit>
				{state => (
					<div className={tranClass(state)}>
						<TaskGroup
							title='Orphan tasks'
							tasks={dataBase.tasks}
							selectedProject={NO_PROJECT}
						/>
					</div>
				)}
			</Transition>
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
						: dataBase.projects.find((p: Project) => p.id === selectedProject)!
								.name
				}
			/>
			<AddDialog
				isOpen={addProjDialogOpen}
				onClose={() => openAddProjDialog(false)}
				add={() => addProject('Test' + getNextProjectId(dataBase))}
				// TODO project name
			/>
			<DumpDataBaseDialog
				isOpen={dumpDBDialogOpen}
				onClose={() => openDumpDBDialog(false)}
				dump={JSON.stringify(dataBase, null, '\t')}
				onClipboard={() => addToast('Copied to clipboard !', Intent.SUCCESS)}
			/>
			<LoadDataBaseDialog
				isOpen={loadDBDialogOpen}
				onClose={() => openLoadDBDialog(false)}
				onLoad={(input: string) => {
					let newDatabase: any | undefined;
					try {
						newDatabase = JSON.parse(input);
					} catch (error) {
						addToast('Imported DB format is not correct', Intent.WARNING);
						return false;
					}
					const { valid, reason } = validateDB(newDatabase);
					if (!valid) {
						addToast(reason!, Intent.WARNING);
						return false;
					}
					updateDataBase(newDatabase);
					addToast('DB successfully imported', Intent.SUCCESS);
					return true;
				}}
			/>
		</div>
	);
};

export default App;

// TODO document + comment code
// TODO tests
