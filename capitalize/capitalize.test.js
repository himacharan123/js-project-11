
import { capitalize } from './capitalize.js';

describe('Testing functions', () => {
  test('Capitalize String', () => {
    expect(capitalize('test')).toBe('Test');
  });
});
