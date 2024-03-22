import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AccountComponent } from './account/account.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AccountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-account-app';
}
