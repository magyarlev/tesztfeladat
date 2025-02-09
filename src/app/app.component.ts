import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { TransactionDisplayComponent } from './transactions-container/transactions-container.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ContractDetailsComponent,
    TransactionDisplayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tesztfeladat';
}
