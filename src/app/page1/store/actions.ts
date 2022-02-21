import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const effectSuccess = createAction('[Counter Component] effectSuccess');
export const effectError = createAction('[Counter Component] effectError');
