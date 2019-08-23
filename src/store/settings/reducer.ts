import { Reducer } from 'redux';
import {
	LIGHT_THEME,
	SHOW_BUTTON_TEXT_STORAGE_KEY,
	SHOW_ORPHAN_STORAGE_KEY,
	THEME_STORAGE_KEY
} from '../../utils/constants';
import {
	SettingsState,
	SET_SHOW_BUTTON_TEXT,
	SET_SHOW_ORPHAN,
	SET_THEME
} from './types';

console.log(localStorage.getItem(SHOW_BUTTON_TEXT_STORAGE_KEY));
console.log(localStorage.getItem(SHOW_BUTTON_TEXT_STORAGE_KEY) === undefined);

// Type-safe initial state
const INITIAL_STATE: SettingsState = {
	theme: localStorage.getItem(THEME_STORAGE_KEY) || LIGHT_THEME,
	showOrphan: localStorage.getItem(SHOW_ORPHAN_STORAGE_KEY) === 'true',
	showButtonText: localStorage.getItem(SHOW_BUTTON_TEXT_STORAGE_KEY) === undefined
		? true
		: localStorage.getItem(SHOW_BUTTON_TEXT_STORAGE_KEY) === 'true'
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
		case SET_SHOW_BUTTON_TEXT:
			return {
				...state,
				showButtonText: action.payload
			};
		default:
			return state;
	}
};

export default settingsReducer;
