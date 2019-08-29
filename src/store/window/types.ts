import { Action } from 'redux';

// Window level state object
export type WindowState = {
	smallScreen: boolean;
};

export const SET_SMALL_SCREEN = '@@window/SET_SMALL_SCREEN';

export interface SetSmallScreenAction extends Action {
	type: typeof SET_SMALL_SCREEN;
	payload: boolean;
}

export type WindowActionTypes = SetSmallScreenAction;
