/**
 * State interface goes here
 */
export interface State {
  isEnabled: boolean;
  isShown: boolean;
};

/**
 * Initial state goes here
 */
export const initialState: State = {
  isEnabled: false,
  isShown: false
};
