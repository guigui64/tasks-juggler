import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import settingsReducer from './settings/reducer';
import { SettingsState } from './settings/types';

// The top-level state object
export type AppState = {
	settings: SettingsState;
};

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const reducers: Reducer<AppState> = combineReducers<AppState>({
	settings: settingsReducer
});

// Create the store with the middlewares
const middlewares = [logger];
const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
