import React from 'react';
import { FormGroup, Switch, Alignment } from '@blueprintjs/core';
import {
	DARK_THEME,
	LIGHT_THEME,
	THEME_STORAGE_KEY,
	SHOW_ORPHAN_STORAGE_KEY
} from '../constants';

export const SettingsForm = ({
	theme,
	setTheme,
	showOrphan,
	setShowOrphan
}: any) => (
	<FormGroup
		style={{
			padding: '10px',
			margin: '0'
		}}
	>
		<Switch
			alignIndicator={Alignment.RIGHT}
			checked={theme === DARK_THEME}
			onClick={() => {
				const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
				setTheme(newTheme);
				localStorage.setItem(THEME_STORAGE_KEY, newTheme);
			}}
		>
			{(theme === LIGHT_THEME ? 'Dark' : 'Light') + ' theme'}
		</Switch>
		<Switch
			alignIndicator={Alignment.RIGHT}
			checked={showOrphan}
			onClick={() => {
				const newShowOrphan = !showOrphan;
				setShowOrphan(newShowOrphan);
				localStorage.setItem(SHOW_ORPHAN_STORAGE_KEY, String(newShowOrphan));
			}}
		>
			{`${showOrphan ? 'Hide' : 'Show'} orphan tasks`}
		</Switch>
	</FormGroup>
);
