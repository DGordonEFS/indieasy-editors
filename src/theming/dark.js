import { applyThemeFromJSON } from '@indieasy.software/indieasy-components';

import componentIds from './componentIds';

const colors = {
	WHITE: 'white',
	BLACK: 'black',
	GRAY: 'gray',
	LIGHT_GRAY: '#666666',
	LIGHTER_GRAY: '#BBBBBB',
	DARK_GRAY: '#464646',
	DARKER_GRAY: '#363636',
	DARKEST_GRAY: '#252525',
};

const theme = {
	theme: 'dark',
	components: [
		{
			id: componentIds.BUTTON,
			value: {
				backgroundColor: colors.GRAY,
				border: '1px solid black',
				color: 'white',
				cursor: 'pointer',
				':hover': {
					backgroundColor: colors.LIGHTER_GRAY,
				},
			},
		},
		{
			id: componentIds.DIVIDER,
			value: {
				width: '90%',
				height: '1px',
				backgroundColor: 'gray',
				marginLeft: 'auto',
				marginRight: 'auto',
			},
		},
		{
			id: componentIds.LIST,
			value: {
				backgroundColor: 'transparent',
				color: 'white',
			},
		},
		{
			id: componentIds.LIST_ITEM,
			value: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: colors.DARK_GRAY,
				borderBottom: '1px solid black',
				color: 'white',
				padding: '5px',
				cursor: 'pointer',
				':hover': {
					backgroundColor: colors.LIGHTER_GRAY,
					color: 'black',
				},
			},
		},
		{
			id: componentIds.LIST_ITEM_DISABLED,
			value: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: colors.DARK_GRAY,
				border: '1px solid black',
				color: 'gray',
				padding: '5px',
				cursor: 'pointer',
				':hover': {
					backgroundColor: colors.LIGHTER_GRAY,
					color: 'black',
				},
			},
		},
		{
			id: componentIds.LIST_ITEM_SELECTED,
			value: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: colors.DARKEST_GRAY,
				border: '1px solid black',
				color: 'white',
				padding: '5px',
				cursor: 'pointer',
			},
		},
		{
			id: componentIds.LIST_ITEM_TEXT,
			value: {
				userSelect: 'none',
			},
		},
		{
			id: componentIds.LIST_ITEM_RIGHT_CONTENT_TEXT,
			value: {
				marginRight: '15px',
				userSelect: 'none',
			},
		},
		{
			id: componentIds.LIST_ITEM_BUTTON,
			value: {
				backgroundColor: 'transparent',
				color: 'black',
				marginLeft: '5px',
				display: 'initial',
				cursor: 'pointer',
				fontSize: '0.8rem',
				':hover': {
					color: 'white',
				},
			},
		},
		{
			id: componentIds.LIST_ITEM_BUTTON_SELECTED,
			value: {
				backgroundColor: 'transparent',
				color: 'white',
				marginLeft: '5px',
				display: 'initial',
				cursor: 'pointer',
				fontSize: '0.8rem',
				':hover': {
					color: 'white',
				},
			},
		},
		{
			id: componentIds.PANEL,
			value: {
				backgroundColor: colors.DARKEST_GRAY,
			},
		},
		{
			id: componentIds.MENU,
			value: {
				position: 'absolute',
				backgroundColor: colors.DARKEST_GRAY,
				border: '1px solid black',
				color: 'white',
				boxSizing: 'border-box',
				filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.25))',
				padding: '5px',
			},
		},
		{
			id: componentIds.MENU_SUB,
			value: {
				position: 'absolute',
				backgroundColor: colors.DARKEST_GRAY,
				border: '1px solid black',
				color: 'white',
				boxSizing: 'border-box',
				padding: '5px',
			},
		},
		{
			id: componentIds.MENU_ITEM,
			value: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: colors.DARKEST_GRAY,
				color: 'white',
				paddingTop: '4px',
				paddingBottom: '4px',
				paddingLeft: '20px',
				paddingRight: '10px',
			},
		},
		{
			id: componentIds.MENU_ITEM_DISABLED,
			value: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: colors.DARKEST_GRAY,
				color: 'gray',
				paddingTop: '4px',
				paddingBottom: '4px',
				paddingLeft: '20px',
				paddingRight: '10px',
			},
		},
		{
			id: componentIds.MENU_ITEM_SELECTED,
			value: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: colors.DARKER_GRAY,
				color: 'white',
				paddingTop: '4px',
				paddingBottom: '4px',
				paddingLeft: '20px',
				paddingRight: '10px',
			},
		},
		{
			id: componentIds.MENU_ITEM_BUTTON,
			value: {
				backgroundColor: 'transparent',
				color: 'white',
				marginLeft: '15px',
				display: 'initial',
				cursor: 'pointer',
				fontSize: '0.8rem',
			},
		},
		{
			id: componentIds.MENU_ITEM_BUTTON_SELECTED,
			value: {
				backgroundColor: 'transparent',
				color: 'black',
				marginLeft: '5px',
				display: 'initial',
				cursor: 'pointer',
				fontSize: '0.8rem',
				':hover': {
					color: 'white',
				},
			},
		},
		{
			id: componentIds.SCROLL_PANE,
			value: { width: '100%', height: '100%' },
		},
		{
			id: componentIds.SPLIT_PANE,
			value: {},
		},
		{
			id: componentIds.SPLIT_PANE_SEPARATOR,
			value: {
				backgroundColor: colors.DARK_GRAY,
				boxSizing: 'border-box',
				filter: 'drop-shadow(0 0px 2px rgba(0, 0, 0, 0.75))',
				zIndex: 40,
			},
		},
		{
			id: componentIds.TAB_BAR,
			value: {
				backgroundColor: colors.DARKER_GRAY,
				width: '100%',
				height: '2rem',
				display: 'flex',
				alignItems: 'center',
				borderBottom: '1px solid black',
				boxSizing: 'boder-box',
			},
		},
		{
			id: componentIds.TAB_BAR_ITEM,
			value: {
				backgroundColor: colors.LIGHT_GRAY,
				color: 'black',
				display: 'flex',
				alignItems: 'center',
				borderRight: '1px solid black',
				height: '100%',
				paddingLeft: '20px',
				paddingRight: '5px',
				userSelect: 'none',
				boxSizing: 'border',
				fontSize: '0.8rem',
				cursor: 'pointer',
				':hover': {
					backgroundColor: colors.LIGHTER_GRAY,
					color: 'black',
				},
			},
		},
		{
			id: componentIds.TAB_BAR_ITEM_SELECTED,
			value: {
				backgroundColor: colors.DARKEST_GRAY,
				color: 'white',
				display: 'flex',
				alignItems: 'center',
				borderRight: '1px solid black',
				height: '100%',
				paddingLeft: '20px',
				paddingRight: '10px',
				paddingBottom: '2px',
				userSelect: 'none',
				fontSize: '0.8rem',
				boxSizing: 'border',
				cursor: 'pointer',
				marginBottom: '-1px',
				verticalAlign: 'middle',
				':hover': {},
			},
		},
		{
			id: componentIds.TEXT,
			value: {
				userSelect: 'none',
			},
		},
		{
			id: componentIds.TOOL_BAR,
			value: {
				backgroundColor: colors.DARK_GRAY,
				paddingLeft: '5px',
				width: '100%',
				height: '2rem',
				filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.5))',
				zIndex: '99',
			},
		},
		{
			id: componentIds.TOOL_BAR_ITEM,
			value: {
				backgroundColor: colors.DARK_GRAY,
				color: 'white',
				fontSize: '0.9rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				paddingLeft: '5px',
				paddingRight: '5px',
			},
		},
		{
			id: componentIds.TOOL_BAR_ITEM_SELECTED,
			value: {
				backgroundColor: colors.DARKEST_GRAY,
				color: 'white',
				fontSize: '0.9rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				paddingLeft: '5px',
				paddingRight: '5px',
			},
		},
		{
			id: componentIds.TOOL_BAR_ITEM_ACTIVE,
			value: {
				backgroundColor: colors.DARKEST_GRAY,
				color: 'white',
				fontSize: '0.9rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				paddingLeft: '5px',
				paddingRight: '5px',
				paddingTop: '4px',
			},
		},
		{
			id: componentIds.TOOL_BAR_ITEM_DISABLED,
			value: {
				backgroundColor: colors.DARKER_GRAY,
				color: 'gray',
				fontSize: '0.9rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				paddingLeft: '5px',
				paddingRight: '5px',
			},
		},
	],
};

const commonThemes = [
	{
		id: componentIds.COMMON_LIST,
		value: {
			backgroundColor: colors.DARKER_GRAY,
			height: '100%',
		},
	},
	{
		id: componentIds.COMMON_LIST_ITEM,
		value: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			backgroundColor: 'transparent',
			color: colors.LIGHTER_GRAY,
			paddingLeft: '15px',
			paddingTop: '7px',
			paddingBottom: '7px',
			paddingRight: '5px',
			cursor: 'pointer',
			':hover': {
				backgroundColor: colors.DARK_GRAY,
				color: 'white',
			},
		},
	},
	{
		id: componentIds.COMMON_LIST_ITEM_SELECTED,
		value: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			backgroundColor: colors.DARK_GRAY,
			border: '1px solid black',
			color: 'green',
			padding: '5px',
			cursor: 'pointer',
		},
	},
	{
		id: componentIds.COMMON_SIDE_BAR,
		value: {
			backgroundColor: colors.DARK_GRAY,
			width: '35px',
			height: '100%',
			paddingTop: '10px',
			paddingLeft: '5px',
			paddingRight: '5px',
			display: 'flex',
			flexDirection: 'column',
			filter: 'drop-shadow(2px 0px 2px rgba(0, 0, 0, 0.5))',
			zIndex: '90',
		},
	},
];

theme.components.push(...commonThemes);

const dialogThemes = [
	{
		id: componentIds.DIALOG_BUTTON_ADD,
		value: {
			display: 'flex',
			backgroundColor: colors.DARKEST_GRAY,
			color: 'white',
			cursor: 'pointer',
			height: '34px',
			alignItems: 'center',
			boxSizing: 'border-box',
			paddingLeft: '5px',
			fontSize: '0.9rem',
			filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.5))',
			':hover': {
				backgroundColor: colors.LIGHTER_GRAY,
				color: 'black',
			},
		},
	},
	{
		id: componentIds.DIALOG_PANEL_CONTENT,
		value: {
			display: 'flex',
			backgroundColor: colors.DARKEST_GRAY,
			width: '100%',
			height: '100%',
		},
	},
	{
		id: componentIds.DIALOG_SIDE_BAR_TOP,
		value: {
			display: 'flex',
			flexDirection: 'column',
		},
	},
];

theme.components.push(...dialogThemes);

applyThemeFromJSON(theme);
