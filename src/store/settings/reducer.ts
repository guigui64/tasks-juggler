import { Reducer } from 'redux';
import {
	LIGHT_THEME,
	SHOW_ORPHAN_STORAGE_KEY,
	THEME_STORAGE_KEY
} from '../../constants';
import { SettingsState, SET_SHOW_ORPHAN, SET_THEME } from './types';

// Type-safe initial state
const INITIAL_STATE: SettingsState = {
	theme: localStorage.getItem(THEME_STORAGE_KEY) || LIGHT_THEME,
	showOrphan: Boolean(localStorage.getItem(SHOW_ORPHAN_STORAGE_KEY) || false)
};

const settingsReducer: Reducer<SettingsState> = (
	state: SettingsState = INITIAL_STATE,
	action
) => {
	switch (action.type) {
		case SET_THEME:
			return {
				...state,
				theme: action.payload
			};
		case SET_SHOW_ORPHAN:
			return {
				...state,
				showOrphan: action.payload
			};
		default:
			return state;
	}
};

export default settingsReducer;
