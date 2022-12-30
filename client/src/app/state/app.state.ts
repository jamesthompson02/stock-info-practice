import { CounterState } from "./counter/counter.reducer";
import { SearchState } from "./search/search.reducer";

export interface AppState {
    counter: CounterState,
    search: SearchState
}