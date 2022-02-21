import { createReducer, on } from '@ngrx/store';
import { decrement, effectSuccess, increment, reset } from './actions';

import { countState } from './state';

export const initialState: countState = { countState: { count: 0 } };

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      countState: { ...state.countState, count: state.countState.count + 1 }
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      countState: { ...state.countState, count: state.countState.count - 1 }
    };
  }),
  on(reset, (state) => {
    return { ...state, countState: { ...state.countState, count: 0 } };
  }),
  on(effectSuccess, (state) => {
    return { ...state };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
