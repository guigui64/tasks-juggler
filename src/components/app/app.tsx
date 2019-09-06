import { H3, IIntentProps, Intent, IToaster } from '@blueprintjs/core';
import { ESCAPE } from '@blueprintjs/core/lib/esm/common/keys';
import React, { Dispatch, FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { unselectAll } from '../../store/tasks/actions';
import { TasksActionTypes } from '../../store/tasks/types';
import { setSmallScreen } from '../../store/window/actions';
import { WindowActionTypes } from '../../store/window/types';
import {
	ALL_PROJECTS,
	DATABASE_STORAGE_KEY,
	NO_PROJECT
} from '../../utils/constants';
import {
	createFakeDataBase,
	getNextProjectId,
	getNextTaskId,
	getProject,
	getTask,
	validateDB,
	validateProjectName,
	validateTaskTitle
} from '../../utils/data/database';
import { DataBase, Project, Task } from '../../utils/types/types';
import Navbar from '../nav/navbar';
import {
	DumpDataBaseDialog,
	LoadDataBaseDialog
} from '../overlays/database.dialogs';
import DeleteAlert from '../overlays/delete.alert';
import {
	AddProjectDialog,
	EditProjectDialog
} from '../overlays/project.dialogs';
import { AddTaskDialog, EditTaskDialog } from '../overlays/task.dialogs';
import TaskGroup from '../tasks/task.group';
import './app.css';

type AppStateProps = {
	theme: string;
	showOrphan: boolean;
	selectedTasks: number[];
};

type AppDispatchProps = {
	unselectAll: () => void;
	setSmallScreen: (smallScreen: boolean) => void;
};

type AppProps = {
	toaster: IToaster;
} & AppStateProps &
	AppDispatchProps;

const App: FC<AppProps> = ({
	toaster,
	theme,
	showOrphan,
	selectedTasks,
	unselectAll,
	setSmallScreen
}) => {
	// Overlays states
	const [deleteProjAlertOpen, openDeleteProjAlert] = useState(false);
	const [addProjDialogOpen, openAddProjDialog] = useState(false);
	const [editProjDialogOpen, openEditProjDialog] = useState(false);
	const [deleteTaskAlertOpen, openDeleteTaskAlert] = useState(false);
	const [addTaskDialogOpen, openAddTaskDialog] = useState(false);
	const [editTaskDialogOpen, openEditTaskDialog] = useState(false);
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
	const [taskToEdit, setTaskToEdit] = useState({
		title: 'NO_TITLE',
		desc: 'NO_DESC',
		duration: -1
	});
	useEffect(() => {
		const task = getTask(dataBase)(selectedTasks[0]);
		if (task) {
			setTaskToEdit({
				title: task.title,
				desc: task.desc,
				duration: task.duration
			});
		}
	}, [dataBase, selectedTasks]);

	// Methods on database
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
	const addTask = (
		title: string,
		desc: string,
		projectId: number,
		duration: number
	) => {
		dataBase.tasks.push({
			id: getNextTaskId(dataBase),
			...{
				title,
				projectId,
				desc,
				duration
			}
		});
		updateDataBase(dataBase);
		setSelectedProject(projectId);
	};
	const editTask = (
		taskId: number,
		title: string,
		desc: string,
		duration: number
	) => {
		let task = getTask(dataBase)(taskId)!;
		[task.title, task.desc, task.duration] = [title, desc, duration];
		updateDataBase(dataBase);
	};
	const deleteTask = (taskId: number) => {
		dataBase.tasks = dataBase.tasks.filter(t => t.id !== taskId);
		updateDataBase(dataBase);
		unselectAll();
	};

	// Toaster
	ReactDOM.createPortal(toaster, document.getElementById('root')!);
	const addToast = (message: string, intent: IIntentProps['intent']) => {
		toaster.show({ message, intent });
	};

	// Listen to escape and unselect all tasks
	useEffect(() => {
		const keydownListener = (e: KeyboardEvent) => {
			if (e.keyCode === ESCAPE) unselectAll();
		};
		document.addEventListener('keydown', keydownListener);
		return () => document.removeEventListener('keydown', keydownListener);
	}, [unselectAll]);

	// Detect window size
	const mediaQuerySelector = window.matchMedia('(max-width: 500px)');
	mediaQuerySelector.addListener((e: MediaQueryListEvent) =>
		setSmallScreen(e.matches)
	);

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
			<div id='content'>
				<TaskGroup
					title='Tasks'
					tasks={dataBase.tasks}
					selectedProject={selectedProject}
					openAddTaskDialog={openAddTaskDialog}
					openEditTaskDialog={openEditTaskDialog}
					openDeleteTaskAlert={openDeleteTaskAlert}
				/>
				<TaskGroup
					title='Orphan tasks'
					tasks={dataBase.tasks}
					selectedProject={NO_PROJECT}
					show={showOrphan}
					openAddTaskDialog={openAddTaskDialog}
					openEditTaskDialog={openEditTaskDialog}
					openDeleteTaskAlert={openDeleteTaskAlert}
				/>
				<div style={{ padding: '50px 50px 0 50px' }}>
					<div style={{ display: 'inline' }}>
						<H3 style={{ display: 'inline-block', marginRight: '10px' }}>
							Planning
						</H3>
					</div>
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
				add={addTask}
				validateTitle={validateTaskTitle(dataBase)}
				projects={dataBase.projects}
				selectedProjectId={selectedProject}
			/>
			<EditTaskDialog
				isOpen={editTaskDialogOpen}
				onClose={() => openEditTaskDialog(false)}
				taskId={selectedTasks[0]}
				edit={editTask}
				validateTitle={validateTaskTitle(dataBase)}
				projects={dataBase.projects}
				taskToEdit={taskToEdit}
			/>
			<DeleteAlert
				confirmButtonText={
					'Delete task' + (selectedTasks.length > 1 ? 's' : '')
				}
				isOpen={deleteTaskAlertOpen}
				onCancel={() => openDeleteTaskAlert(false)}
				onConfirm={() => {
					openDeleteTaskAlert(false);
					selectedTasks.forEach(i => deleteTask(i));
				}}
				deletionTargetName={
					selectedTasks
						? selectedTasks.length > 1
							? selectedTasks
									.map(id => dataBase.tasks.find(t => t.id === id)!.title)
									.join(', ')
							: dataBase.tasks.find(t => t.id === selectedTasks[0])
							? dataBase.tasks.find(t => t.id === selectedTasks[0])!.title
							: ''
						: ''
				}
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
	showOrphan: state.settings.showOrphan,
	selectedTasks: state.tasks.selected
});

const mapDispatchToProps = (
	dispatch: Dispatch<TasksActionTypes | WindowActionTypes>
): AppDispatchProps => ({
	unselectAll: () => dispatch(unselectAll()),
	setSmallScreen: (smallScreen: boolean) =>
		dispatch(setSmallScreen(smallScreen))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
