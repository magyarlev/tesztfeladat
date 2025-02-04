import { Component, input } from '@angular/core';
import { Payment } from '../../../types';
import { AttachmentComponent } from './attachment/attachment.component';
import { DateAndPaymentsComponent } from './date-and-payments/date-and-payments.component';
import { TransactionInfoComponent } from './transaction-info/transaction-info.component';

@Component({
  selector: 'app-item-details',
  imports: [
    AttachmentComponent,
    DateAndPaymentsComponent,
    TransactionInfoComponent,
  ],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss',
})
export class ItemDetailsComponent {
  payment = input.required<Payment>();
}
