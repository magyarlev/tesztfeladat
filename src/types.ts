export type Payment = {
  id: string;
  method: string;
  attachment: boolean;
  date: string;
  amount: string;
  status: string;
};

export enum Status {
  Folyamatban = 'Folyamatban',
  Sikertelen = 'Sikertelen',
  Beérkezett = 'Beérkezett',
}
