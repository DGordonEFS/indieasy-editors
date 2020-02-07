import React, { Component } from 'react';

import {
	Button,
	Panel,
	ScrollPane,
	SplitPane,
	TabBar,
	Text,
	Toolbar,
	themeComponent,
	Select,
	SelectItem,
} from '@indieasy.software/indieasy-components';

import DialogScreen from './DialogScreen';
import NodeScreen from './NodeScreen';
import SideBar from './DialogSideBar';

const toolbarData = [
	{
		text: 'File',
		data: [
			{ text: 'Save' },
			{ text: 'Save As' },
			{ text: 'Load' },
			{ divider: true },
			{
				text: 'Fruits',
				data: [
					{ text: 'Apples' },
					{ text: 'Bananas', disabled: true },
					{
						text: 'Grapes',
						data: [{ text: 'red' }, { text: 'white' }, { text: 'wine' }],
					},
				],
			},
		],
	},
	{ text: 'Edit' },
	{ text: 'View' },
	{ text: 'Options' },
];

const screens = {
	DIALOGS: 'dialogs',
	NODES: 'nodes',
};

class DialogEditor extends Component {
	state = { screen: screens.DIALOGS };

	render() {
		return (
			<div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
				<Toolbar data={toolbarData} />
				<div style={{ display: 'flex', height: '100%' }}>
					<SideBar />
					<Select value={this.state.screen}>
						<SelectItem target={screens.DIALOGS}>
							<DialogScreen />
						</SelectItem>
						<SelectItem target={screens.NODES}>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<NodeScreen />
							</div>
						</SelectItem>
					</Select>
				</div>
			</div>
		);
	}
}

export default themeComponent(DialogEditor);
