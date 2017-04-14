import { Action } from '@ngrx/store';
import { type   } from '../utils/checkActionsTypeUnique';

/**
 * All action type goes here
 */
export const ActionTypes = {
    OPEN_SIDEBAR         : type('[SIDEBAR] Open Sidebar'),
    CLOSE_SIDEBAR        : type('[SIDEBAR] Close Sidebar'),
    ENABLE_SIDEBAR       : type('[SIDEBAR] Enable Sidebar'),
    DISABLE_SIDEBAR      : type('[SIDEBAR] Disable Sidebar')
};


/**
 * All action goes here
 */
export class OpenSidebarAction implements Action {
  public type = ActionTypes.OPEN_SIDEBAR;
}

export class CloseSidebarAction implements Action {
  public type = ActionTypes.CLOSE_SIDEBAR;
}

export class EnableSidebarAction implements Action {
  public type = ActionTypes.ENABLE_SIDEBAR;
}

export class DisableSidebarAction implements Action {
  public type = ActionTypes.DISABLE_SIDEBAR;
}

/**
 * Export typing
 */
export type Actions
  = OpenSidebarAction
  | CloseSidebarAction
  | EnableSidebarAction
  | DisableSidebarAction;
