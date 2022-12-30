import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { SearchState } from './search.reducer';

export const selectAppStateCounter = (state: AppState) => state.search;
export const selectSearchStateCounter = createSelector(
    selectAppStateCounter,
    (state: SearchState) => state.searchTerm
);