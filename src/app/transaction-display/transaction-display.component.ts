import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transaction-display',
  imports: [RouterModule],
  templateUrl: './transaction-display.component.html',
  styleUrl: './transaction-display.component.scss',
})
export class TransactionDisplayComponent {}
