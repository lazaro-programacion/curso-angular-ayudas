import { Provider } from './provider';

describe('Provider', () => {
  it('should create an instance', () => {
    expect(new Provider('n', 'ap', 'd', 'k', 6)).toBeTruthy();
  });
});
