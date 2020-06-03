export class OrderItem {
  public code: string;
  public quantity: number;
  public unitPrice: number;

  constructor(code: string, quantity: number, unitPrice: number) {
    this.code = code;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
  }
}
