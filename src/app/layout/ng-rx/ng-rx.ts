import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ng-rx',
  imports: [FormsModule],
  templateUrl: './ng-rx.html',
  styleUrls: ['./ng-rx.scss'],
})
export class NgRx {

  accountId = 'ACC-1001';
  amount: number | string = 501;
  balance = 0;
  message = '';

  loadAccount() {
    // Simulate loading an account balance for demo purposes
    this.balance = 1000;
    this.flash(`${this.accountId} loaded (balance ${this.currency(this.balance)})`);
  }

  deposit() {
    const amt = Number(this.amount) || 0;
    if (amt <= 0) return this.flash('Enter a positive amount');
    this.balance += amt;
    this.flash(`Deposited ${this.currency(amt)} — new balance ${this.currency(this.balance)}`);
  }

  withdraw() {
    const amt = Number(this.amount) || 0;
    if (amt <= 0) return this.flash('Enter a positive amount');
    if (amt > this.balance) return this.flash('Insufficient funds');
    this.balance -= amt;
    this.flash(`Withdrew ${this.currency(amt)} — new balance ${this.currency(this.balance)}`);
  }

  private flash(text: string) {
    this.message = text;
    setTimeout(() => (this.message = ''), 3000);
  }

  currency(n: number) {
    return `$${n.toFixed(2)}`;
  }

}
