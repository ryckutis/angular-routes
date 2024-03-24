import { Component } from '@angular/core';
import { BalanceComponent } from '../balance/balance.component';
import { ActivatedRoute } from '@angular/router';

interface Account {
  name: string;
  balance: number;
}

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [BalanceComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  accounts: Account[] = [
    {
      name: 'Savings account',
      balance: 100,
    },
    {
      name: 'Checking account',
      balance: 200,
    },
    { name: 'Debt account', balance: -50 },
  ];

  accountsToShow: Account[] = this.accounts;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((data) => {
      const id = parseInt(data.get('id') || '');
      const accountIndex = id - 1;
      this.accountsToShow = [this.accounts[accountIndex]];
    });
  }

  withdraw(account: Account, amount: number) {
    account.balance -= amount;
  }
  deposit(account: Account, amount: number) {
    account.balance += amount;
  }
}
