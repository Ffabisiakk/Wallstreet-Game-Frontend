export class Rate {
  date: string;
  purchaseRates: RateLine[];
  saleRates: RateLine[];
}

export class RateLine {
  name: string;
  amount: number;
}
