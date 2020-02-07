import React from 'react';

import { Panel, themeComponent } from '@indieasy.software/indieasy-components';
import componentIds from '../../../theming/componentIds';

const SideBar = (props) => {
	return (
		<Panel theme={componentIds.COMMON_SIDE_BAR} {...props}>
			{props.children}
		</Panel>
	);
};

export default themeComponent(SideBar);
