import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountComponent } from './account/account.component';
import { filterAccessToAccountGuard } from './guards/filter-access-to-account.guard';
import { AccountListComponent } from './account-list/account-list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  { path: 'accounts', component: AccountListComponent },
  { path: 'id/:searchQuery', component: AccountListComponent },
  {
    path: 'account/:id',
    component: AccountComponent,
    // canActivate: [filterAccessToAccountGuard],
  },
  { path: '', component: AccountListComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'faq', component: FaqComponent },
  {
    path: 'user-zone',
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
