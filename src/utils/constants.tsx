import { Classes } from '@blueprintjs/core';

// Blueprint
export const DARK_THEME = Classes.DARK;
export const LIGHT_THEME = '';

// Local storage keys
const prefix = 'tasks-juggler-';
export const THEME_STORAGE_KEY = prefix + 'theme';
export const SHOW_ORPHAN_STORAGE_KEY = prefix + 'show-orphan';
export const SHOW_BUTTON_TEXT_STORAGE_KEY = prefix + 'show-button-text';
export const DATABASE_STORAGE_KEY = prefix + 'database';

// Projects
export const NO_PROJECT: number = -1;
export const ALL_PROJECTS: number = -2;

// Tasks
export const TASK_DURATION_NONE: number = -1;

// Other
export const MIN_NAME_SIZE: number = 3;
