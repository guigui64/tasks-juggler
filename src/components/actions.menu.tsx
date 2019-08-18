import { Menu } from '@blueprintjs/core';
import React, { FC } from 'react';
import { ALL_PROJECTS } from '../constants';

type ActionsMenuProps = {
	openAddProjDialog: (b: boolean) => void;
	selectedProject: number;
	openDeleteProjAlert: (b: boolean) => void;
	dumpDataBase: () => void;
	loadDataBase: () => void;
};

export const ActionsMenu: FC<ActionsMenuProps> = ({
	openAddProjDialog,
	selectedProject,
	openDeleteProjAlert,
	dumpDataBase,
	loadDataBase
}) => (
	<Menu>
		<Menu.Divider title='Projects' />
		<Menu.Item
			text='Add project'
			icon='add'
			onClick={() => openAddProjDialog(true)}
		/>
		<Menu.Item
			text='Edit project'
			icon='edit'
			disabled={selectedProject === ALL_PROJECTS}
			onClick={() => console.log('TODO edit project')}
			// TODO edit project
		/>
		<Menu.Item
			text='Delete project'
			icon='trash'
			intent='danger'
			disabled={selectedProject === ALL_PROJECTS}
			onClick={() => openDeleteProjAlert(true)}
		/>
		<Menu.Divider title='Database' />
		<Menu.Item text='Dump database' icon='floppy-disk' onClick={dumpDataBase} />
		<Menu.Item text='Load database' icon='database' onClick={loadDataBase} />
	</Menu>
);
