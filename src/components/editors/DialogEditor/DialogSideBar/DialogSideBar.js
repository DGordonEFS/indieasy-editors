import React from 'react';
import SideBar from 'components/common/SideBar';

import { Panel } from '@indieasy.software/indieasy-components';
import componentIds from '../../../../theming/componentIds';

const DialogSideBar = (props) => {
	return (
		<SideBar>
			<Panel theme={componentIds.DIALOG_SIDE_BAR_TOP}></Panel>
		</SideBar>
	);
};

export default DialogSideBar;
