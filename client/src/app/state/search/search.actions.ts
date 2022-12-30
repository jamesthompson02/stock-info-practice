import { createAction, props } from '@ngrx/store';

export const newSearch = createAction(
    '[Dashboard Search Form] Search',
    props<{ payload: string }>()
)

export const loading = createAction(
    '[Dashboard Search Form] Loading'
)

export const loaded = createAction(
    '[Dashboard widget] Loaded',
    
)