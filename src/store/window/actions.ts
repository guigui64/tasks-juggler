import { ActionCreator } from 'redux';
import { SetSmallScreenAction, SET_SMALL_SCREEN } from './types';

// Type these action creators with `: ActionCreator<ActionTypeYouWantToPass>`.
// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly.

export const setSmallScreen: ActionCreator<SetSmallScreenAction> = (
	smallScreen: boolean
) => ({
	type: SET_SMALL_SCREEN,
	payload: smallScreen
});
