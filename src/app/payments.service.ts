import { Injectable } from '@angular/core';
import { Payment, Status } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  #payments: Payment[] = [
    {
      id: 'EPAYMT8635122525146120',
      method: 'Bankkártya',
      date: '2025.02.03',
      amount: 5000,
      status: Status.Folyamatban,
    },
    {
      id: '1234563434',
      method: 'Bankkártya',
      date: '2025.01.13',
      amount: 5000,
      status: Status.Sikertelen,
    },
    {
      id: 'EPAYMT1235131254782691',
      method: 'Átutalás',
      date: '2024.12.05',
      amount: 5000,
      status: Status.Beérkezett,
    },
    {
      id: '123456213',
      method: 'Bankkártya',
      date: '2025.02.03',
      amount: 5000,
      status: Status.Beérkezett,
    },
  ];

  getPayments(): Payment[] {
    return this.#payments;
  }
}
