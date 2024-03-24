import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountComponent } from './account/account.component';
import { filterAccessToAccountGuard } from './guards/filter-access-to-account.guard';
import { AccountListComponent } from './account-list/account-list.component';

export const routes: Routes = [
  { path: 'accounts', component: AccountListComponent },
  { path: 'id/:searchQuery', component: AccountListComponent },
  {
    path: 'account/:id',
    component: AccountComponent,
    // canActivate: [filterAccessToAccountGuard],
  },
  { path: '', component: AccountComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', component: PageNotFoundComponent },
];
