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
      amount: '5 000 Ft',
      status: Status.Folyamatban,
    },
    {
      id: '123456789',
      method: 'Átutalás',
      date: '2024.12.05',
      amount: '5 000 Ft',
      status: Status.Beérkezett,
    },
    {
      id: 'EPAYMT1235131254782691',
      method: 'Bankkártya',
      date: '2025.01.13',
      amount: '5 000 Ft',
      status: Status.Sikertelen,
    },
    {
      id: 'EPAYMT12351312547823491',
      method: 'Bankkártya',
      date: '2025.02.03',
      amount: '5 000 Ft',
      status: Status.Beérkezett,
    },
  ];

  getPayments(): Payment[] {
    return this.#payments;
  }
}
