import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadAccount, deposit1, withdraw1 } from '../../store/account.actions';
import { selectAccountId, selectBalance, selectStatus, selectError } from '../../store/account.selectors';


@Component({
  selector: 'app-ngrx-banking',
  imports: [CommonModule, FormsModule],
  templateUrl: './ngrx-banking.html',
  styleUrl: './ngrx-banking.scss',
})
export class NgrxBanking {
private store = inject(Store);

  // UI model
  accountId = 'ACC-1001';
  amount = 500;

  // Using NgRx signal selectors (requires NgRx v16+)
  readonly currentAccountId = this.store.selectSignal(selectAccountId);
  readonly balance = this.store.selectSignal(selectBalance);
  readonly status = this.store.selectSignal(selectStatus);
  readonly error = this.store.selectSignal(selectError);

  onLoad() {
    this.store.dispatch(loadAccount({ accountId: this.accountId }));
  }

  onDeposit() {
    this.store.dispatch(deposit1({ amount: Math.max(0, Number(this.amount) || 0) }));
  }

  onWithdraw() {
    this.store.dispatch(withdraw1({ amount: Math.max(0, Number(this.amount) || 0) }));
  }

}
