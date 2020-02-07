import { componentIds } from '@indieasy.software/indieasy-components';

const dialogComponentIds = {};
dialogComponentIds.DIALOG_BUTTON_ADD = 'dialog-button-add';
dialogComponentIds.DIALOG_PANEL_CONTENT = 'dialog-panel-content';
dialogComponentIds.DIALOG_SIDE_BAR_TOP = 'dialog-side-bar-top';
Object.assign(componentIds, dialogComponentIds);

const commonComponentIds = {};
commonComponentIds.COMMON_LIST = 'common-list';
commonComponentIds.COMMON_LIST_ITEM = 'common-list-item';
commonComponentIds.COMMON_LIST_ITEM_SELECTED = 'common-list-item-selected';
commonComponentIds.COMMON_SIDE_BAR = 'common-side-bar';
Object.assign(componentIds, commonComponentIds);

export default componentIds;

export { dialogComponentIds };
