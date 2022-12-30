import { createReducer, on } from '@ngrx/store';
import { newSearch, loading, loaded } from './search.actions';

export interface SearchState {
    searchTerm: string | null,
    loading: boolean | null
}

export const initialState: SearchState = {
    searchTerm: null,
    loading: null
}

export const searchReducer = createReducer(
    initialState,
    on(newSearch, (state, {payload}) => ({
        ...state,
        searchTerm: payload
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