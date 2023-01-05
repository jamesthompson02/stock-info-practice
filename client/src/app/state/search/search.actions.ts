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

export const newExchange = createAction(
    '[Value Widget Component] Exchange',
    props<{ payload: string }>()
)

export const newCountry = createAction(
    '[Value Widget Component] Country',
    props<{ payload: string }>()
)

export const newSector = createAction(
    '[Value Widget Component] Sector',
    props<{ payload: string }>()
)

export const newIndustry = createAction(
    '[Value Widget Component] Industry',
    props<{ payload: string }>()
)

export const newYearHigh = createAction(
    '[Value Widget Component] Year High',
    props<{ payload: string }>()
)

export const newYearLow = createAction(
    '[Value Widget Component] Year Low',
    props<{ payload: string }>()
)

export const newFiftyDayMA = createAction(
    '[Value Widget Component] Fifty day MA',
    props<{ payload: string }>()
)



export const loading = createAction(
    '[Dashboard Search Form] Loading'
)

export const loaded = createAction(
    '[Dashboard widget] Loaded',
    
)