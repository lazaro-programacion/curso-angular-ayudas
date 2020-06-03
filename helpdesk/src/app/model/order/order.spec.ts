import { Order } from './order';
import { OrderItem } from './order-item';

describe('Order', () => {
  it('should create an instance', () => {
    expect(new Order()).toBeTruthy();
  });

  it('la suma es correcta', () => {
    const order = new Order();
    order.address = "cualquiera";
    order.items = [
      new OrderItem("a", 4, 5),
      new OrderItem("a", 2, 5),
      new OrderItem("r", 1, 1)
    ];
    expect(order.getTotalPrice()).toBe(31);
    order.items = [
      new OrderItem("a", 40, 5),
      new OrderItem("a", 22, 5),
      new OrderItem("r", 10, 1)
    ];
    expect(order.getTotalPrice()).toBe(320);
  });

});
