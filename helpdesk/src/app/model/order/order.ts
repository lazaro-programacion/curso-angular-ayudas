import { OrderItem } from './order-item';

export class Order {
  public address: string;
  public name: string;
  public items: OrderItem[];

  public getTotalPrice() {
    this.items.reduce((acc, act) => acc + act.unitPrice * act.quantity, 0);
  }
}
