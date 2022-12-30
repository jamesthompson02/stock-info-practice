import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CounterState } from './counter.reducer';

export const selectAppStateCounter = (state: AppState) => state.counter;
export const selectCounterStateCounter = createSelector(
    selectAppStateCounter,
    (state: CounterState) => state.counter
);
