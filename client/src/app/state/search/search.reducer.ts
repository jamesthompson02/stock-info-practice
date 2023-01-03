import { createReducer, on } from '@ngrx/store';
import { newSearch, newROE, newName, loading, loaded } from './search.actions';

export interface SearchState {
    searchTerm: string | null,
    ROE: string | number | null,
    name: string | null,
    loading: boolean | null
}

export const initialState: SearchState = {
    searchTerm: null,
    ROE: null,
    name: null,
    loading: null
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
    on(loading, (state) => ({
        ...state,
        loading: true
    })),
    on(loaded, (state) => ({
        ...state,
        loading: false
    }))
)