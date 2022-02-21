import { createReducer, on } from '@ngrx/store';

import { appState } from './state';
import { setUserNameSuccess } from './actions';

export const initialState: appState = { appState: { userName: '' } };

const _appRootReducer = createReducer(
  initialState,
  on(setUserNameSuccess, (state, action) => {
    return {
      ...state,
      appState: { ...state.appState, userName: action.userName }
    };
  })
);

export function appRootReducer(state: any, action: any) {
  return _appRootReducer(state, action);
}
