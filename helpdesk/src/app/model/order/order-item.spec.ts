import { OrderItem } from './order-item';

describe('OrderItem', () => {
  it('should create an instance', () => {
    expect(new OrderItem("j", 4, 6)).toBeTruthy();
  });
});
