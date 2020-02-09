import React from 'react';

import {
	Button,
	List,
	ScrollPane,
	SplitPane,
	Text,
	Select,
	SelectItem,
} from '@indieasy.software/indieasy-components';

import DialogTabBar from 'components/editors/DialogEditor/DialogTabBar';

import componentIds from 'theming/componentIds';

const NodeScreen = (props) => {
	return (
		<SplitPane>
			<div>
				<Button theme={componentIds.DIALOG_BUTTON_ADD}>
					<Text>Add Node</Text>
				</Button>
				<ScrollPane>
					<List data={{ text: 'test' }} />
				</ScrollPane>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<DialogTabBar data={[{ text: 'File' }]} />
				<Select value={this.state.nodeScreenType}>
					<SelectItem target="form">
						<ScrollPane>
							<div />
						</ScrollPane>
					</SelectItem>
					<SelectItem target="form+branching">
						<SplitPane>
							<div />
							<div />
						</SplitPane>
					</SelectItem>
				</Select>
			</div>
		</SplitPane>
	);
};

export default NodeScreen;
