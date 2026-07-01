
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AccountState } from './account.reducer';

export const selectAccountState = createFeatureSelector<AccountState>('account');
export const selectAccountId = createSelector(selectAccountState, s => s.accountId);
export const selectBalance = createSelector(selectAccountState, s => s.balance);
export const selectStatus = createSelector(selectAccountState, s => s.status);
export const selectError = createSelector(selectAccountState, s => s.error);
