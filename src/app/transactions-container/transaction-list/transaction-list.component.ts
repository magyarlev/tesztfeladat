import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentsService } from '../../payments.service';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { TransactionListItemComponent } from './transaction-list-item/transaction-list-item.component';

@Component({
  selector: 'app-transaction-item',
  imports: [NgbAccordionModule, TransactionListItemComponent],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss',
})
export class TransactionListComponent {
  paymentsService = inject(PaymentsService);
  payments = this.paymentsService.getPayments();
}
