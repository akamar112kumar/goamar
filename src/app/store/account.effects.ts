import { Component } from '@angular/core';
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadAccount, loadAccountFailure, loadAccountSuccess } from '../store/account.actions';
import { Accounts } from '../services/accounts';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AccountEffects {

    private actions$ = inject(Actions);
  private Accounts = inject(Accounts);

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAccount),
      switchMap(({ accountId }) =>
        this.Accounts.getAccount(accountId).pipe(
          map(account => loadAccountSuccess({ account })),
          catchError(err => of(loadAccountFailure({ error: (err?.message ?? 'Failed to load account') as string })))
        )
      )
    )
  );
}
