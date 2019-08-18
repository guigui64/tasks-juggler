import {
	SET_THEME,
	SET_SHOW_ORPHAN,
	SetThemeAction,
	SetShowOrphanAction
} from './types';
import { ActionCreator } from 'redux';

// Type these action creators with `: ActionCreator<ActionTypeYouWantToPass>`.
// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly.

export const setTheme: ActionCreator<SetThemeAction> = (theme: string) => ({
	type: SET_THEME,
	payload: theme
});

export const setShowOrphan: ActionCreator<SetShowOrphanAction> = (
	showOrphan: boolean
) => ({
	type: SET_SHOW_ORPHAN,
	payload: showOrphan
});
