import { createSelector } from 'reselect';
import { State } from './root.model';
import * as sidebarSelector from '../sidebar/sidebar.selectors';

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function from the reselect library creates
 * very efficient selectors that are memoized and only recompute when arguments change.
 * The created selectors can also be composed together to select different
 * pieces of state.
 */

export const getSidebarState  = (state: State) => state.sidebar;
export const isSidebarEnabled = createSelector(getSidebarState, sidebarSelector.isSidebarEnable);
export const isSidebarShown   = createSelector(getSidebarState, sidebarSelector.isSidebarShown);
