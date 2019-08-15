import { DataBase } from '../types/types';

import { NO_PROJECT } from '../constants';

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

export const getNextTaskId: (db: DataBase, projectId: number) => number = (
	db,
	projectId
) => {
	return (
		db.tasks
			.filter(t => t.projectId === projectId)
			.map(t => t.id)
			.reduce((p, c) => Math.max(p, c)) + 1
	);
};
