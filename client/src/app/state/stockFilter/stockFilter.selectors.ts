import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { filterState } from './stockFilter.reducer';

export const selectAppStateFilter = (state: AppState) => state.filter;

export const selectFilterState = createSelector(
    selectAppStateFilter,
    (state: filterState) => state.filterTerm
);

