//---------------UserStore------------------------------------//

export interface User {
  fullname: string | undefined;
  address: string | undefined;
  email: string | undefined;
  password: string | undefined;
  logged: boolean;
  registered: boolean;
}

export type UserAction = {
  type: string;
  payload: User;
};
export type Dispatch = (action: UserAction) => void;

export interface UserStore {
  user: User;
  dispatch: Dispatch;
}

interface UserActions {
  [x: string]: (
    state: UserStore,
    action: UserAction,
  ) => {
    user: User;
    dispatch: Dispatch;
  };
}

export interface UserActionInterface {
  SET_USER: string;
  LOG_OUT: string;
}
export const USER_ACTION_TYPES: UserActionInterface = {
  SET_USER: 'SET_USER',
  LOG_OUT: 'LOG_OUT',
};

export const useractions: UserActions = {
  [USER_ACTION_TYPES.SET_USER]: (state: UserStore, action: UserAction) => {
    const user = { ...action.payload };
    const newState = {
      ...state,
      user,
    };
    return newState;
  },
  [USER_ACTION_TYPES.LOG_OUT]: (state: UserStore, action: UserAction) => {
    const { payload } = action;
    const user = { ...payload };
    const newState = {
      ...state,
      user,
    };
    return newState;
  },
};
