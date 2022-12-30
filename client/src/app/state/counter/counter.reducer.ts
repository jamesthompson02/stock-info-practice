import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export interface CounterState {
    counter: number,
    test: boolean
}

export const initialState: CounterState = {
    counter: 0,
    test: false
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, {payload}) => ({
    ...state,
    counter: state.counter + payload
    })),
  on(decrement, (state, {payload}) => ({
    ...state,
    counter: state.counter - payload
   })),
  on(reset, (state) => ({
    ...state,
    counter: 0 
  }))
);