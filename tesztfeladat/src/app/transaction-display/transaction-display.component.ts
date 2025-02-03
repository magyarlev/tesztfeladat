import { Component } from '@angular/core';
import { TransactionCardComponent } from './transaction-card/transaction-card.component';

@Component({
  selector: 'app-transaction-display',
  imports: [TransactionCardComponent],
  templateUrl: './transaction-display.component.html',
  styleUrl: './transaction-display.component.scss',
})
export class TransactionDisplayComponent {}
