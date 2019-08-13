import React, { FunctionComponent } from 'react';
import { Task } from '../types/types';
import { ALL_PROJECTS, NO_PROJECT } from '../constants';
import TaskCard from './taskcard';

const TaskGroup: FunctionComponent<{
  tasks: Task[];
  selectedProject: number;
}> = ({ tasks, selectedProject }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gridGap: '20px'
    }}
  >
    {tasks
      .filter(
        t =>
          t.projectId === selectedProject ||
          (selectedProject === ALL_PROJECTS && t.projectId !== NO_PROJECT)
      )
      .map(task => {
        let { title, desc, duration, id } = task;
        return <TaskCard {...{ title, desc, duration }} key={id} />;
      })}
  </div>
);

export default TaskGroup;
