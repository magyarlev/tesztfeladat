import { Routes } from '@angular/router';
import { TransactionListComponent } from './transactions-container/transaction-list/transaction-list.component';

export const routes: Routes = [
  {
    path: '',
    component: TransactionListComponent,
  },
  {
    path: 'items1',
    component: TransactionListComponent,
  },
  {
    path: 'items2',
    component: TransactionListComponent,
  },
  {
    path: 'items3',
    component: TransactionListComponent,
  },
];
