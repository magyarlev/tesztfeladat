import { Routes } from '@angular/router';
import { TransactionItemComponent } from './transaction-display/transaction-item/transaction-item.component';

export const routes: Routes = [
  {
    path: 'items1',
    component: TransactionItemComponent,
  },
  {
    path: 'items2',
    component: TransactionItemComponent,
  },
  {
    path: 'items3',
    component: TransactionItemComponent,
  },
];
