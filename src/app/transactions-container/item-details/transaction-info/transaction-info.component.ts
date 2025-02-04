import { Component, input } from '@angular/core';
import { Payment } from '../../../../types';

@Component({
  selector: 'app-transaction-info',
  imports: [],
  templateUrl: './transaction-info.component.html',
  styleUrl: './transaction-info.component.scss',
})
export class TransactionInfoComponent {
  payment = input.required<Payment>();
}
