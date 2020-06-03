import Service from './service';

describe('Service', () => {
  it('should create an instance', () => {
    expect(new Service('kj', '43', '232', false)).toBeTruthy();
  });
});
