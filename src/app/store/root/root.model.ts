/**
 * import SubModel
 */
import { State as SidebarState } from '../sidebar/sidebar.model';

export const stateToSync = [
  'sidebar'
];

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  sidebar: SidebarState;
}

