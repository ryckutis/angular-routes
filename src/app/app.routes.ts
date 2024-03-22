import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountComponent } from './account/account.component';
import { filterAccessToAccountGuard } from './guards/filter-access-to-account.guard';

export const routes: Routes = [
  {
    path: 'account/:id',
    component: AccountComponent,
    canActivate: [filterAccessToAccountGuard],
  },
  { path: '', component: AccountComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', component: PageNotFoundComponent },
];
