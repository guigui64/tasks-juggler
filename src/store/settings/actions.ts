import { ActionCreator } from 'redux';
import {
	SetShowButtonTextAction,
	SetShowOrphanAction,
	SetThemeAction,
	SET_SHOW_BUTTON_TEXT,
	SET_SHOW_ORPHAN,
	SET_THEME
} from './types';

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

export const setShowButtonText: ActionCreator<SetShowButtonTextAction> = (
	showButtonText: boolean
) => ({
	type: SET_SHOW_BUTTON_TEXT,
	payload: showButtonText
});
