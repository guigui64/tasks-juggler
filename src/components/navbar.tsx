import React, { FC, useState } from 'react';
import {
	Alignment,
	Button,
	Popover,
	Position,
	Tabs,
	Tooltip
} from '@blueprintjs/core';
import { Navbar as BPNavbar } from '@blueprintjs/core';

import { ReactComponent as Logo } from '../assets/juggler.svg';
import { ActionsMenu } from './actions.menu';
import { SettingsForm } from './settings.form';
import { ALL_PROJECTS, DARK_THEME } from '../constants';
import { DataBase, Project } from '../types/types';

type NavbarProps = {
	theme: string;
	setTheme: (s: string) => void;
	dumpDataBase: () => void;
	loadDataBase: () => void;
	setSelectedProject: (p: number) => void;
	dataBase: DataBase;
	selectedProject: number;
	openDeleteProjAlert: (b: boolean) => void;
	openAddProjDialog: (b: boolean) => void;
	showOrphan: boolean;
	setShowOrphan: (b: boolean) => void;
};

const Navbar: FC<NavbarProps> = ({
	theme,
	setTheme,
	dumpDataBase,
	loadDataBase,
	setSelectedProject,
	dataBase,
	selectedProject,
	openDeleteProjAlert,
	openAddProjDialog,
	showOrphan,
	setShowOrphan
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

	return (
		<BPNavbar>
			<BPNavbar.Group align={Alignment.LEFT}>
				<BPNavbar.Heading
					style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
					className={logoClass}
					onMouseEnter={() => setLogoClass('animated jello')}
					onMouseLeave={() => setLogoClass('')}
				>
					<Logo height='40px' fill={theme === DARK_THEME ? 'white' : 'black'} />
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
								selectedProject,
								openDeleteProjAlert,
								dumpDataBase,
								loadDataBase
							}}
						/>
					}
					position={Position.BOTTOM}
				>
					<Button minimal icon='build' text='Actions' />
				</Popover>
				<Popover
					content={
						<SettingsForm {...{ theme, setTheme, showOrphan, setShowOrphan }} />
					}
					position={Position.BOTTOM}
				>
					<Button minimal icon='cog' text='Settings' />
				</Popover>
			</BPNavbar.Group>
		</BPNavbar>
	);
};

export default Navbar;
