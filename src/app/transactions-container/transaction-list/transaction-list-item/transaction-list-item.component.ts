import {
  Component,
  ElementRef,
  input,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ItemDetailsComponent } from '../../item-details/item-details.component';
import { NgClass } from '@angular/common';
import { Payment } from '../../../../types';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transaction-list-item',
  imports: [ItemDetailsComponent, NgClass, NgbAccordionModule],
  templateUrl: './transaction-list-item.component.html',
  styleUrl: './transaction-list-item.component.scss',
})
export class TransactionListItemComponent {
  // @ViewChild('transactionId', { static: true })
  idElement!: ElementRef<HTMLDivElement>;
  payment = input.required<Payment>();
  hasLongId = false;

  idExtensionBtnExpanded = false;

  toggleIdExpensionBtn() {
    this.idExtensionBtnExpanded = !this.idExtensionBtnExpanded;
  }

  ngOnInit() {
    if (this.payment().id.length > 12) {
      this.hasLongId = true;
    }
  }

  // ngAfterViewInit() {
  //   if (this.idElement.nativeElement.clientWidth > 140) {
  //     this.hasLongId = true;
  //   }
  // }
}
