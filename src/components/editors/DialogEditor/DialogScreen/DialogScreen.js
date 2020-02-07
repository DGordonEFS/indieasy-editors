import React from 'react';

import {
	Button,
	List,
	Panel,
	ScrollPane,
	SplitPane,
	Text,
} from '@indieasy.software/indieasy-components';

import DialogTabBar from 'components/editors/DialogEditor/DialogTabBar';

import componentIds from 'theming/componentIds';

console.log(componentIds.COMMON_LIST);

const DialogScreen = (props) => {
	return (
		<SplitPane>
			<div style={{ height: '100%' }}>
				<Button theme={componentIds.DIALOG_BUTTON_ADD}>
					<Text>+ Dialog</Text>
				</Button>
				<ScrollPane vertical>
					<List
						theme={componentIds.COMMON_LIST}
						itemTheme={componentIds.COMMON_LIST_ITEM}
						selectedItemTheme={componentIds.COMMON_LIST_ITEM_SELECTED}
						data={[
							{ text: 'dialog_01' },
							{ text: 'dialog_02' },
							{ text: 'dialog_03' },
							{ text: 'dialog_04' },
						]}
					/>
				</ScrollPane>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
				<DialogTabBar data={[{ text: 'File' }]} />
				<Panel theme={componentIds.DIALOG_PANEL_CONTENT} />
			</div>
		</SplitPane>
	);
};

export default DialogScreen;
