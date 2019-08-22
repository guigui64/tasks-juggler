import { Reducer } from 'redux';
import { SELECT_TASK, TasksState, UNSELECT_ALL, UNSELECT_TASK } from './types';

// Type-safe initial state
const INITIAL_STATE: TasksState = {
	selected: []
};

const tasksReducer: Reducer<TasksState> = (
	state: TasksState = INITIAL_STATE,
	action
) => {
	switch (action.type) {
		case SELECT_TASK:
			return {
				...state,
				selected: state.selected.concat(action.payload)
			};
		case UNSELECT_TASK:
			return {
				...state,
				selected: state.selected.filter(x => x !== action.payload)
			};
		case UNSELECT_ALL:
			return {
				...state,
				selected: []
			};
		default:
			return state;
	}
};

export default tasksReducer;
