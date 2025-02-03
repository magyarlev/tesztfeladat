import { Component } from '@angular/core';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transaction-display',
  imports: [TransactionItemComponent, NgbAccordionModule],
  templateUrl: './transaction-display.component.html',
  styleUrl: './transaction-display.component.scss',
})
export class TransactionDisplayComponent {}
