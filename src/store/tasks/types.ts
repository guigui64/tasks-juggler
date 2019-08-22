import { Action } from 'redux';

// Tasks level state object
export type TasksState = {
	selected: number[];
};

export const SELECT_TASK = '@@settings/SELECT_TASK';
export const UNSELECT_TASK = '@@settings/UNSELECT_TASK';
export const UNSELECT_ALL = '@@settings/UNSELECT_ALL';

export interface SelectTaskAction extends Action {
	type: typeof SELECT_TASK;
	payload: number;
}

export interface UnselectTaskAction extends Action {
	type: typeof UNSELECT_TASK;
	payload: number;
}

export interface UnselectAllAction extends Action {
	type: typeof UNSELECT_ALL;
}

export type TasksActionTypes =
	| SelectTaskAction
	| UnselectTaskAction
	| UnselectAllAction;
