
import { createReducer, on } from '@ngrx/store';
import { deposit, withdraw,deposit1, withdraw1, loadAccount, loadAccountSuccess, loadAccountFailure } from './account.actions';

export interface AccountState {
  accountId: string | null;
  balance: number;
  status: 'idle' | 'loading' | 'ready' | 'error';
  error?: string | null;
}

export const initialState: AccountState = {
  accountId: null,
  balance: 0,
  status: 'idle',
  error: null
};

export const accountReducer = createReducer(
  initialState,
  on(loadAccount, (state, { accountId }) => ({ ...state, accountId, status: 'loading', error: null })),
  on(loadAccountSuccess, (state, { account }) => ({ ...state, accountId: account.id, balance: account.balance, status: 'ready' })),
  on(loadAccountFailure, (state, { error }) => ({ ...state, status: 'error', error })),

  on(deposit, (state, { amount }) => ({ ...state, balance: state.balance + Math.max(0, amount) })),
  on(withdraw, (state, { amount }) => ({ ...state, balance: Math.max(0, state.balance - Math.max(0, amount)) })),
  on(deposit1, (state, { amount }) => ({ ...state, balance: state.balance + Math.max(0, amount) })),
  on(withdraw1, (state, { amount }) => ({ ...state, balance: Math.max(0, state.balance - Math.max(0, amount)) }))
);
