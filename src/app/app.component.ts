import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import path from 'path';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AccountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}

  onInputChange($event: any) {
    const searchQuery = $event.target.value;
    this.router.navigate(['id', searchQuery]);
  }
}
