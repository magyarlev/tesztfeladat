import { Component, inject } from '@angular/core';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentsService } from '../payments.service';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transaction-display',
  imports: [TransactionItemComponent, NgbAccordionModule, NgbNavModule],
  templateUrl: './transaction-display.component.html',
  styleUrl: './transaction-display.component.scss',
})
export class TransactionDisplayComponent {
  paymentsService = inject(PaymentsService);
  payments = this.paymentsService.getPayments();
}
