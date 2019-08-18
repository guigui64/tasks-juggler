import { Action } from 'redux';

// Settings level state object
export type SettingsState = {
	theme: string;
	showOrphan: boolean;
};

export const SET_THEME = '@@settings/SET_THEME';
export const SET_SHOW_ORPHAN = '@@settings/SET_SHOW_ORPHAN';

export interface SetThemeAction extends Action {
	type: typeof SET_THEME;
	payload: string;
}

export interface SetShowOrphanAction extends Action {
	type: typeof SET_SHOW_ORPHAN;
	payload: boolean;
}

export type SettingsActionTypes = SetThemeAction | SetShowOrphanAction;
