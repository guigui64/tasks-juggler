import { ActionCreator } from 'redux';
import {
	SelectTaskAction,
	SELECT_TASK,
	UnselectAllAction,
	UnselectTaskAction,
	UNSELECT_ALL,
	UNSELECT_TASK
} from './types';

// Type these action creators with `: ActionCreator<ActionTypeYouWantToPass>`.
// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly.

export const selectTask: ActionCreator<SelectTaskAction> = (id: number) => ({
	type: SELECT_TASK,
	payload: id
});

export const unselectTask: ActionCreator<UnselectTaskAction> = (
	id: number
) => ({
	type: UNSELECT_TASK,
	payload: id
});

export const unselectAll: ActionCreator<UnselectAllAction> = () => ({
	type: UNSELECT_ALL
});
