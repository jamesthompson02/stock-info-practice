import { createAction, props } from '@ngrx/store';

export const newSearch = createAction(
    '[Dashboard Search Form] Search',
    props<{ payload: string }>()
)

export const newROE = createAction(
    '[Value Widget Component] ROE',
    props<{ payload: string | number }>()
)

export const newName = createAction(
    '[Value Widget Component] Name',
    props<{ payload: string }>()
)

export const loading = createAction(
    '[Dashboard Search Form] Loading'
)

export const loaded = createAction(
    '[Dashboard widget] Loaded',
    
)