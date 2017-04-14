import { State, initialState } from './sidebar.model';
import { ActionTypes, Actions } from './sidebar.actions';

export function reducer(state = initialState, action: Actions): State {
    switch (action.type) {

        case ActionTypes.ENABLE_SIDEBAR: {
            return Object.assign({}, state, {
                isEnabled : true,
            });
        }

        case ActionTypes.DISABLE_SIDEBAR: {
            return Object.assign({}, state, {
                isEnabled : false
            });
        }

        case ActionTypes.OPEN_SIDEBAR: {
            return Object.assign({}, state, {
                isShown : true
            });
        }

        case ActionTypes.CLOSE_SIDEBAR: {
            return Object.assign({}, state, {
                isShown : false
            });
        }

        default: return state;
    }
}
