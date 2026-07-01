import { Injectable } from '@angular/core';


import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface AccountDto { id: string; balance: number; }


@Injectable({
  providedIn: 'root',
})
export class Accounts {
  getAccount(id: string): Observable<AccountDto> {
    // Simulated backend call
    const seed = (Array.from(id).reduce((acc, c) => acc + c.charCodeAt(0), 0) % 5) * 1000; // pseudo-random
    return of({ id, balance: 5000 + seed }).pipe(delay(400));
  }
}

export interface BankState {
  balance: number;
}

export const initialBankState: BankState = {
  balance: 0
};