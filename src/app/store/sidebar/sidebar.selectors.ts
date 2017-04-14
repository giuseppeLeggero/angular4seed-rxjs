import { State } from './sidebar.model';

/**
 * selectors can be considered the
 * queries into a database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 *
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.sidebarIsEnabled$ = state$.select(getIsEnable);
 * 	}
 * }
 * ```
 */
export const isSidebarEnable = (state: State) => state.isEnabled;
export const isSidebarShown = (state: State) => state.isShown;
