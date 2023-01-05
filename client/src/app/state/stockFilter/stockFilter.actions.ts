import { createAction, props } from '@ngrx/store';

export const filter = createAction(
    '[Stock Filter Input] Filter',
    props<{ payload: string }>()
)