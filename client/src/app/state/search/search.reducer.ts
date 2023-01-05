import { createReducer, on } from '@ngrx/store';
import { newSearch, newROE, newName, newCountry, newExchange, newSector, newIndustry,
         newYearHigh, newYearLow, newFiftyDayMA,loading, loaded } from './search.actions';

export interface SearchState {
    searchTerm: string | null,
    ROE: string | number | null,
    name: string | null,
    exchange: string | null,
    country: string | null,
    sector: string | null,
    industry: string | null,
    yearHigh: string | null,
    yearLow: string | null,
    fiftyDayMA: string | null,
    loading: boolean | null
}

export const initialState: SearchState = {
    searchTerm: null,
    ROE: null,
    name: null,
    exchange: null,
    country: null,
    sector: null,
    industry: null,
    yearHigh: null,
    yearLow: null,
    fiftyDayMA: null,
    loading: null,
}

export const searchReducer = createReducer(
    initialState,
    on(newSearch, (state, {payload}) => ({
        ...state,
        searchTerm: payload
    })),
    on(newROE, (state, {payload}) => ({
        ...state,
        ROE: payload
    })),
    on(newName, (state, {payload}) => ({
        ...state,
        name: payload
    })),
    on(newCountry, (state, {payload}) => ({
        ...state,
        country: payload
    })),
    on(newExchange, (state, {payload}) => ({
        ...state,
        exchange: payload
    })),
    on(newSector, (state, {payload}) => ({
        ...state,
        sector: payload
    })),
    on(newIndustry, (state, {payload}) => ({
        ...state,
        industry: payload
    })),
    on(newYearHigh, (state, {payload}) => ({
        ...state,
        yearHigh: payload
    })),
    on(newYearLow, (state, {payload}) => ({
        ...state,
        yearLow: payload
    })),
    on(newFiftyDayMA, (state, {payload}) => ({
        ...state,
        fiftyDayMA: payload
    })),
    on(loading, (state) => ({
        ...state,
        loading: true
    })),
    on(loaded, (state) => ({
        ...state,
        loading: false
    }))
)