import { Alignment, FormGroup, Switch } from '@blueprintjs/core';
import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../store';
import {
	setShowButtonText,
	setShowOrphan,
	setTheme
} from '../../store/settings/actions';
import { SettingsActionTypes } from '../../store/settings/types';
import {
	DARK_THEME,
	LIGHT_THEME,
	SHOW_BUTTON_TEXT_STORAGE_KEY,
	SHOW_ORPHAN_STORAGE_KEY,
	THEME_STORAGE_KEY
} from '../../utils/constants';

type SettingsFormStateProps = {
	theme: string;
	showOrphan: boolean;
	showButtonText: boolean;
};
type SettingsFormDispatchProps = {
	setTheme: (theme: string) => void;
	setShowOrphan: (showOrphan: boolean) => void;
	setShowButtonText: (showButtonText: boolean) => void;
};
type SettingsFormProps = SettingsFormStateProps & SettingsFormDispatchProps;

const SettingsForm: FC<SettingsFormProps> = ({
	theme,
	setTheme,
	showOrphan,
	showButtonText,
	setShowOrphan,
	setShowButtonText
}) => (
	<FormGroup
		style={{
			padding: '10px',
			margin: '0'
		}}
	>
		<Switch
			alignIndicator={Alignment.RIGHT}
			checked={theme === DARK_THEME}
			onChange={() => {
				const newTheme: string =
					theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
				setTheme(newTheme);
				localStorage.setItem(THEME_STORAGE_KEY, newTheme);
			}}
		>
			{(theme === LIGHT_THEME ? 'Dark' : 'Light') + ' theme'}
		</Switch>
		<Switch
			alignIndicator={Alignment.RIGHT}
			checked={showOrphan}
			onChange={() => {
				const newShowOrphan: boolean = !showOrphan;
				setShowOrphan(newShowOrphan);
				localStorage.setItem(SHOW_ORPHAN_STORAGE_KEY, String(newShowOrphan));
			}}
		>
			{'Show orphan tasks'}
		</Switch>
		<Switch
			alignIndicator={Alignment.RIGHT}
			checked={showButtonText}
			onChange={() => {
				const newShowButtonText: boolean = !showButtonText;
				setShowButtonText(newShowButtonText);
				localStorage.setItem(
					SHOW_BUTTON_TEXT_STORAGE_KEY,
					String(newShowButtonText)
				);
			}}
		>
			{'Show buttons text'}
		</Switch>
	</FormGroup>
);

const mapStateToProps = (state: AppState): SettingsFormStateProps => ({
	theme: state.settings.theme,
	showOrphan: state.settings.showOrphan,
	showButtonText: state.settings.showButtonText
});

const mapDispatchToProps = (
	dispatch: Dispatch<SettingsActionTypes>
): SettingsFormDispatchProps => ({
	setTheme: (theme: string) => dispatch(setTheme(theme)),
	setShowOrphan: (showOrphan: boolean) => dispatch(setShowOrphan(showOrphan)),
	setShowButtonText: (showButtonText: boolean) =>
		dispatch(setShowButtonText(showButtonText))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsForm);
