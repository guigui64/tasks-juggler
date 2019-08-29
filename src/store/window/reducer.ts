import { Reducer } from 'redux';
import { SET_SMALL_SCREEN, WindowState } from './types';

// Type-safe initial state
const INITIAL_STATE: WindowState = {
	smallScreen: window.innerWidth <= 500
};

const windowReducer: Reducer<WindowState> = (
	state: WindowState = INITIAL_STATE,
	action
) => {
	switch (action.type) {
		case SET_SMALL_SCREEN:
			return {
				...state,
				smallScreen: action.payload
			};
		default:
			return state;
	}
};

export default windowReducer;
