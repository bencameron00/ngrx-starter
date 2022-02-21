import { createAction, props } from '@ngrx/store';

export const setUserName = createAction(
  '[App Root] setUserName',
  props<{ userName: string }>()
);
export const setUserNameSuccess = createAction(
  '[App Root] setUserNameSuccess',
  props<{ userName: string }>()
);
export const setUserNameError = createAction('[App Root] setUserNameError');
