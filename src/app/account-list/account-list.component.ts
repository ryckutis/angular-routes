import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface Account {
  id: number;
  name: string;
  balance: number;
  imageUrl: string;
}

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.scss',
})
export class AccountListComponent {
  accounts: Account[] = [
    {
      id: 1,
      name: 'Savings account',
      balance: 100,
      imageUrl:
        'https://static.vecteezy.com/system/resources/previews/021/314/124/original/bank-account-icon-design-free-vector.jpg',
    },
    {
      id: 2,
      name: 'Checking account',
      balance: 200,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Piggy_Bank_or_Savings_Flat_Icon_Vector.svg/1200px-Piggy_Bank_or_Savings_Flat_Icon_Vector.svg.png',
    },
    {
      id: 3,
      name: 'Debt account',
      balance: -50,
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/8215/8215815.png',
    },
  ];

  accountsToShow: Account[] = this.accounts;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((data) => {
      const searchQuery = (data.get('searchQuery') || '').toLowerCase();
      console.log(searchQuery);
      this.accountsToShow = this.accounts.filter((account) => {
        return account.name.toLowerCase().startsWith(searchQuery);
      });
    });
  }
}
