import { reverseString } from './reverseString.js';

describe('Reverse String Tests', () => {
  test('Reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});
