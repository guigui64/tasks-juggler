import { MIN_NAME_SIZE, NO_PROJECT } from '../constants';
import { DataBase, Project } from '../types/types';

export const createFakeDataBase: () => DataBase = () => {
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
	return initialDataBase;
};

export const validateDB: (
	db: any
) => { valid: boolean; reason?: string } = db => {
	if (typeof db !== 'object' || Array.isArray(db)) {
		return { valid: false, reason: 'Imported DB is not an object' };
	}
	let projectsIds: number[] = [];
	if (db.projects) {
		if (Array.isArray(db.projects)) {
			if (
				!(db.projects as any[]).every(p => {
					if (
						p.name !== undefined &&
						typeof p.name === 'string' &&
						p.desc !== undefined &&
						typeof p.desc === 'string' &&
						p.id !== undefined &&
						typeof p.id === 'number'
					) {
						if (!projectsIds.includes(p.id)) {
							projectsIds.push(p.id);
							return true;
						}
					}
					return false;
				})
			) {
				return {
					valid: false,
					reason: 'Imported DB projects are not correctly formed'
				};
			}
		} else {
			return { valid: false, reason: "Imported DB 'projects' is not an array" };
		}
	} else {
		return { valid: false, reason: "Imported DB has no 'projects' child" };
	}
	projectsIds.push(NO_PROJECT);
	let tasksIds: number[] = [];
	if (db.tasks) {
		if (Array.isArray(db.tasks)) {
			if (
				!(db.tasks as any[]).every(t => {
					if (
						t.title !== undefined &&
						typeof t.title === 'string' &&
						t.desc !== undefined &&
						typeof t.desc === 'string' &&
						t.id !== undefined &&
						typeof t.id === 'number' &&
						t.projectId !== undefined &&
						typeof t.projectId === 'number' &&
						t.duration !== undefined &&
						typeof t.duration === 'number'
					) {
						if (tasksIds.includes(t.id)) {
							return false;
						} else {
							tasksIds.push(t.id);
						}
						if (!projectsIds.includes(t.projectId)) {
							return false;
						}
						return true;
					}
					return false;
				})
			) {
				return {
					valid: false,
					reason: 'Imported DB tasks are not correctly formed'
				};
			}
		} else {
			return { valid: false, reason: "Imported DB 'tasks' is not an array" };
		}
	} else {
		return { valid: false, reason: "Imported DB has no 'tasks' child" };
	}
	return { valid: true };
};

export const getNextProjectId: (db: DataBase) => number = db => {
	return db.projects.map(p => p.id).reduce((p, c) => Math.max(p, c)) + 1;
};

export const getNextTaskId: (db: DataBase) => number = db => {
	return db.tasks.map(t => t.id).reduce((p, c) => Math.max(p, c)) + 1;
};

export const PNV_NOK_TOO_SHORT = 'ProjectNameValidity::NOK_TOO_SHORT';
export const PNV_NOK_NAME_TAKEN = 'ProjectNameValidity::NOK_NAME_TAKEN';
export const PNV_NOK_OTHER = 'ProjectNameValidity::NOK_OTHER';
export const PNV_OK = 'ProjectNameValidity::OK';
export type ProjectNameValidity =
	| typeof PNV_NOK_TOO_SHORT
	| typeof PNV_NOK_NAME_TAKEN
	| typeof PNV_NOK_OTHER
	| typeof PNV_OK;

export const validateProjectName = (db: DataBase) => (
	name: string
): { valid: ProjectNameValidity; reason?: string } => {
	if (name.length < MIN_NAME_SIZE) {
		return { valid: PNV_NOK_TOO_SHORT, reason: 'Too short' };
	}
	if (db.projects.find(p => p.name.toUpperCase() === name.toUpperCase())) {
		return {
			valid: PNV_NOK_NAME_TAKEN,
			reason: `Project with name ${name} already exists`
		};
	}
	return { valid: PNV_OK };
};

export const TTV_NOK_TOO_SHORT = 'TaskTitleValidity::NOK_TOO_SHORT';
export const TTV_NOK_TITLE_TAKEN = 'TaskTitleValidity::NOK_TITLE_TAKEN';
export const TTV_NOK_OTHER = 'TaskTitleValidity::NOK_OTHER';
export const TTV_OK = 'TaskTitleValidity::OK';
export type TaskTitleValidity =
	| typeof TTV_NOK_TOO_SHORT
	| typeof TTV_NOK_TITLE_TAKEN
	| typeof TTV_NOK_OTHER
	| typeof TTV_OK;

export const validateTaskTitle = (db: DataBase, projectId: number) => (
	title: string
): { valid: TaskTitleValidity; reason?: string } => {
	if (title.length < MIN_NAME_SIZE) {
		return { valid: TTV_NOK_TOO_SHORT, reason: 'Too short' };
	}
	if (
		db.tasks.filter(t => t.projectId === projectId).some(t => t.title === title)
	) {
		return {
			valid: TTV_NOK_TITLE_TAKEN,
			reason: `Task with title ${title} already exists`
		};
	}
	return { valid: TTV_OK };
};

export const getProject = (db: DataBase) => (
	id: number
): Project | undefined => {
	return db.projects.find(p => p.id === id);
};
