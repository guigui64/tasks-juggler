export type DataBase = {
	projects: Project[];
	tasks: Task[];
};

export type Project = {
	name: string;
	desc: string;
	id: number;
};

export type Task = {
	title: string;
	desc: string;
	id: number;
	projectId: number;
	duration: number; // in days
};
