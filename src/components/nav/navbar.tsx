import {
	Alignment,
	Navbar as BPNavbar,
	Popover,
	Position,
	Tabs,
	Tooltip
} from '@blueprintjs/core';
import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/images/juggler.svg';
import { AppState } from '../../store';
import { ALL_PROJECTS, DARK_THEME } from '../../utils/constants';
import { DataBase, Project } from '../../utils/types/types';
import { ActionsMenu } from './actions.menu';
import SettingsForm from './settings.form';
import TooltippedButton from '../tooltippedbutton/tooltippedbutton';

type NavbarStateProps = {
	theme: string;
	showButtonText: boolean;
};

type NavbarProps = {
	dumpDataBase: () => void;
	loadDataBase: () => void;
	setSelectedProject: (p: number) => void;
	dataBase: DataBase;
	selectedProject: number;
	openDeleteProjAlert: (b: boolean) => void;
	openAddProjDialog: (b: boolean) => void;
	openEditProjDialog: (b: boolean) => void;
} & NavbarStateProps;

const Navbar: FC<NavbarProps> = ({
	theme,
	dumpDataBase,
	loadDataBase,
	setSelectedProject,
	dataBase,
	selectedProject,
	openDeleteProjAlert,
	openAddProjDialog,
	openEditProjDialog,
	showButtonText
}) => {
	const projects: Project[] = [
		{
			name: 'All',
			id: ALL_PROJECTS,
			desc: 'All the projects'
		},
		...dataBase.projects
	];
	const [logoClass, setLogoClass] = useState('');
	const logoAnimation = [
		'bounce',
		'flash',
		'pulse',
		'rubberBand',
		'headShake',
		'swing',
		'tada',
		'wobble',
		'jello',
		'heartBeat'
	];
	const [logoAnimationIdx, setLogoAnimationIdx] = useState(0);

	return (
		<BPNavbar>
			<BPNavbar.Group align={Alignment.LEFT}>
				<BPNavbar.Heading
					style={{
						fontWeight: 'bold',
						display: 'flex',
						alignItems: 'center'
					}}
					onMouseEnter={() =>
						setLogoClass('animated ' + logoAnimation[logoAnimationIdx])
					}
					onMouseLeave={() => {
						setLogoClass('');
						setLogoAnimationIdx((logoAnimationIdx + 1) % logoAnimation.length);
					}}
				>
					<Logo
						className={logoClass}
						style={{
							animationIterationCount: 'infinite'
						}}
						height='40px'
						fill={theme === DARK_THEME ? 'white' : 'black'}
					/>
					<div style={{ marginLeft: '10px' }}>
						{'Tasks Juggler'.toUpperCase()}
					</div>
				</BPNavbar.Heading>
			</BPNavbar.Group>
			<BPNavbar.Group align={Alignment.RIGHT}>
				<Tabs
					large
					onChange={id => {
						setSelectedProject(id as number);
					}}
					selectedTabId={selectedProject}
				>
					{projects.map((p: Project) => (
						<Tabs.Tab
							title={
								<Tooltip content={p.desc} position={Position.BOTTOM}>
									{p.name.toUpperCase()}
								</Tooltip>
							}
							id={p.id}
							key={p.id}
						/>
					))}
				</Tabs>
				<BPNavbar.Divider />
				<Popover
					content={
						<ActionsMenu
							{...{
								openAddProjDialog,
								openEditProjDialog,
								selectedProject,
								openDeleteProjAlert,
								dumpDataBase,
								loadDataBase
							}}
						/>
					}
					position={Position.BOTTOM}
				>
					<TooltippedButton minimal icon='build' text='Actions' showButtonText={showButtonText} position={Position.LEFT} />
				</Popover>
				<Popover content={<SettingsForm />} position={Position.BOTTOM}>
					<TooltippedButton minimal icon='cog' text='Settings' showButtonText={showButtonText} position={Position.LEFT} />
				</Popover>
			</BPNavbar.Group>
		</BPNavbar>
	);
};

const mapStateToProps = (state: AppState): NavbarStateProps => ({
	theme: state.settings.theme,
	showButtonText: state.settings.showButtonText
});

export default connect(mapStateToProps)(Navbar);
