import { CounterState } from "./counter/counter.reducer";
import { SearchState } from "./search/search.reducer";
import { filterState } from "./stockFilter/stockFilter.reducer";

export interface AppState {
    counter: CounterState,
    search: SearchState,
    filter: filterState
}