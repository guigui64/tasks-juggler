import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import settingsReducer from './settings/reducer';
import { SettingsState } from './settings/types';
import tasksReducer from './tasks/reducer';
import { TasksState } from './tasks/types';

// The top-level state object
export type AppState = {
	settings: SettingsState;
	tasks: TasksState;
};

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const reducers: Reducer<AppState> = combineReducers<AppState>({
	settings: settingsReducer,
	tasks: tasksReducer
});

// Create the store with the middlewares
let middlewares: any[] | never[] = [];
if (process.env.NODE_ENV !== 'production') {
	// development or test
	const logger = require('redux-logger');
	middlewares = [...middlewares, logger];
}
const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
