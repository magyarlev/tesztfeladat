import { Component, inject } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentsService } from '../../payments.service';
import { NgClass } from '@angular/common';
import { Status } from '../../../types';

@Component({
  selector: 'app-transaction-item',
  imports: [NgbAccordionModule, NgClass],
  templateUrl: './transaction-item.component.html',
  styleUrl: './transaction-item.component.scss',
})
export class TransactionItemComponent {
  paymentsService = inject(PaymentsService);
  payments = this.paymentsService.getPayments();

  idExtensionBtnExpanded = false;

  toggleIdExpensionBtn() {
    this.idExtensionBtnExpanded = !this.idExtensionBtnExpanded;
  }
}
