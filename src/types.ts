export type Payment = {
  id: string;
  method: string;
  date: string;
  amount: string;
  status: string;
};

export enum Status {
  Folyamatban = 'Folyamatban',
  Sikertelen = 'Sikertelen',
  Beérkezett = 'Beérkezett',
}
