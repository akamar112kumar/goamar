import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    const directive = new Employee();
    expect(directive).toBeTruthy();
  });
});
