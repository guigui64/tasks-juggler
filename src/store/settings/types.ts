import { Action } from 'redux';

// Settings level state object
export type SettingsState = {
	theme: string;
	showOrphan: boolean;
	showButtonText: boolean;
};

export const SET_THEME = '@@settings/SET_THEME';
export const SET_SHOW_ORPHAN = '@@settings/SET_SHOW_ORPHAN';
export const SET_SHOW_BUTTON_TEXT = '@@settings/SET_SHOW_BUTTON_TEXT';

export interface SetThemeAction extends Action {
	type: typeof SET_THEME;
	payload: string;
}

export interface SetShowOrphanAction extends Action {
	type: typeof SET_SHOW_ORPHAN;
	payload: boolean;
}

export interface SetShowButtonTextAction extends Action {
	type: typeof SET_SHOW_BUTTON_TEXT;
	payload: boolean;
}

export type SettingsActionTypes =
	| SetThemeAction
	| SetShowOrphanAction
	| SetShowButtonTextAction;
