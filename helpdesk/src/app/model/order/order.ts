import { OrderItem } from './order-item';

// comentario
export class Order {
  public address: string;
  public name = "";
  public items: OrderItem[] = [];

  public getTotalPrice() {
    // let preciototal = 0;
    // this.items.forEach(i => {
    //   preciototal += i.unitPrice * i.quantity;
    // });
    // return preciototal;
    return this.items.reduce((acc, act) => acc + act.unitPrice * act.quantity, 0);
  }
}
