import { createAction, props } from '@ngrx/store';

export const loadAccount = createAction('[Account] Load', props<{ accountId: string }>());
export const loadAccountSuccess = createAction('[Account] Load Success', props<{ account: { id: string; balance: number } }>());
export const loadAccountFailure = createAction('[Account] Load Failure', props<{ error: string }>());

export const deposit = createAction('[Account] Deposit', props<{ amount: number }>());
export const withdraw = createAction('[Account] Withdraw', props<{ amount: number }>());
export const deposit1 = createAction('[Account] Deposit', props<{ amount: number }>());
export const withdraw1 = createAction('[Account] Withdraw', props<{ amount: number }>());