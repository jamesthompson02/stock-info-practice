import { createAction, props } from '@ngrx/store';

export const increment = createAction(
    '[Counter Component] Increment',
    props<{ payload: number }>());

export const decrement = createAction(
    '[Counter Component] Decrement',
    props< { payload: number }>());

export const reset = createAction('[Counter Component] Reset');