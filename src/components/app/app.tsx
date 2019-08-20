import { H3, IIntentProps, Intent, IToaster } from '@blueprintjs/core';
import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import {
	ALL_PROJECTS,
	DATABASE_STORAGE_KEY,
	NO_PROJECT
} from '../../utils/constants';
import {
	createFakeDataBase,
	getNextProjectId,
	getProject,
	validateDB,
	validateProjectName
} from '../../utils/data/database';
import { DataBase, Project, Task } from '../../utils/types/types';
import Navbar from '../nav/navbar';
import {
	AddProjectDialog,
	AddTaskDialog,
	EditProjectDialog
} from '../overlays/add-edit.dialog';
import {
	DumpDataBaseDialog,
	LoadDataBaseDialog
} from '../overlays/database.dialogs';
import DeleteAlert from '../overlays/delete.alert';
import TaskGroup from '../tasks/task.group';
import './app.css';

type AppStateProps = {
	theme: string;
	showOrphan: boolean;
};

type AppProps = {
	toaster: IToaster;
} & AppStateProps;

const App: FC<AppProps> = ({ toaster, theme, showOrphan }) => {
	// Overlays states
	const [deleteProjAlertOpen, openDeleteProjAlert] = useState(false);
	const [addProjDialogOpen, openAddProjDialog] = useState(false);
	const [editProjDialogOpen, openEditProjDialog] = useState(false);
	// TODO edit task
	const [deleteTaskAlertOpen, openDeleteTaskAlert] = useState(false);
	const [addTaskDialogOpen, openAddTaskDialog] = useState(false);
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

	const addProject = (name: string, desc: string) => {
		const projectId = getNextProjectId(dataBase);
		dataBase.projects.push({
			name: name,
			desc: desc,
			id: projectId
		});
		updateDataBase(dataBase);
		setSelectedProject(projectId);
	};

	const editProject = (id: number, name: string, desc: string) => {
		dataBase.projects.forEach(p => {
			if (p.id === id) {
				p.name = name;
				p.desc = desc;
			}
		});
		updateDataBase(dataBase);
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

	return (
		<div className={theme} id='container'>
			<Navbar
				dumpDataBase={() => openDumpDBDialog(true)}
				loadDataBase={() => openLoadDBDialog(true)}
				{...{
					setSelectedProject,
					dataBase,
					deleteProject,
					selectedProject,
					openAddProjDialog,
					openDeleteProjAlert,
					openEditProjDialog,
					openAddTaskDialog,
					openDeleteTaskAlert
				}}
			/>
			<TaskGroup
				title='Tasks'
				tasks={dataBase.tasks}
				selectedProject={selectedProject}
				openAddTaskDialog={openAddTaskDialog}
				openDeleteTaskAlert={openDeleteTaskAlert}
			/>
			<TaskGroup
				title='Orphan tasks'
				tasks={dataBase.tasks}
				selectedProject={NO_PROJECT}
				show={showOrphan}
				openAddTaskDialog={openAddTaskDialog}
				openDeleteTaskAlert={openDeleteTaskAlert}
			/>
			<div style={{ padding: '50px 50px 0 50px' }}>
				<div style={{ display: 'inline' }}>
					<H3 style={{ display: 'inline-block', marginRight: '10px' }}>
						Planning
					</H3>
				</div>
			</div>
			<div id='footer'>
				&copy; 2019 &ndash; Guillaume Comte &ndash; All rights reserved
			</div>
			{/* Overlays : */}
			<AddProjectDialog
				isOpen={addProjDialogOpen}
				onClose={() => openAddProjDialog(false)}
				add={addProject}
				validateName={validateProjectName(dataBase)}
			/>
			<EditProjectDialog
				isOpen={editProjDialogOpen}
				onClose={() => openEditProjDialog(false)}
				edit={editProject}
				validateName={validateProjectName(dataBase)}
				project={getProject(dataBase)(selectedProject)!}
			/>
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
			<AddTaskDialog
				isOpen={addTaskDialogOpen}
				onClose={() => openAddTaskDialog(false)}
				add={(title: string, desc: string, duration: number | undefined) => {
					console.log(title, desc, duration);
					// TODO add task
				}}
			/>
			<DeleteAlert
				confirmButtonText='Delete task'
				isOpen={deleteTaskAlertOpen}
				onCancel={() => openDeleteTaskAlert(false)}
				onConfirm={() => {
					openDeleteTaskAlert(false);
					// TODO delete task
				}}
				deletionTargetName={'TODO selected task(s)'}
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

const mapStateToProps = (state: AppState): AppStateProps => ({
	theme: state.settings.theme,
	showOrphan: state.settings.showOrphan
});

export default connect(mapStateToProps)(App);

// TODO document + comment code
// TODO tests
// TODO escape on main => deselect all tasks
// TODO add buttons select all / unselect all
// TODO make navbar reactive to small screens
