import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { SearchState } from './search.reducer';

export const selectAppStateCounter = (state: AppState) => state.search;

export const selectSearchStateCounter = createSelector(
    selectAppStateCounter,
    (state: SearchState) => state.searchTerm
);
export const roeSearchStateCounter = createSelector(
    selectAppStateCounter,
    (state: SearchState) => state.ROE
);
export const nameSearchStateCounter = createSelector(
    selectAppStateCounter,
    (state: SearchState) => state.name
);
export const exchangeSearchStateCounter = createSelector(
    selectAppStateCounter,
    (state: SearchState) => state.exchange
);
export const countrySearchStateCounter = createSelector(
    selectAppStateCounter,
    (state: SearchState) => state.country
);
export const sectorSearchStateCounter = createSelector(
    selectAppStateCounter,
    (state: SearchState) => state.sector
);
export const industrySearchStateCounter = createSelector(
    selectAppStateCounter,
    (state: SearchState) => state.industry
);
export const yearHighSearchStateCounter = createSelector(
    selectAppStateCounter,
    (state: SearchState) => state.yearHigh
);
export const yearLowSearchStateCounter = createSelector(
    selectAppStateCounter,
    (state: SearchState) => state.yearLow
);
export const fiftyDayMASearchStateCounter = createSelector(
    selectAppStateCounter,
    (state: SearchState) => state.fiftyDayMA
);