export interface DataBase {
  projects: Project[];
  tasks: Task[];
}

export interface Project {
  name: string;
  desc: string;
  id: number;
}

export interface Task {
  title: string;
  desc: string;
  id: number;
  projectId: number;
  duration: number; // in days
}
