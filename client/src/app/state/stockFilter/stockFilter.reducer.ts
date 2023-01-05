import { createReducer, on } from '@ngrx/store';
import { filter } from './stockFilter.actions';

export interface filterState {
    filterTerm: string
}

export const initialState: filterState = {
    filterTerm: ""
}

export const filterStockReducer = createReducer(
    initialState,
    on(filter, (state, {payload}) => ({
        ...state,
        filterTerm: payload
    }))
)