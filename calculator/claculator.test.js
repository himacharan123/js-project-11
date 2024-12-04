import { calculator } from './calculator.js';

describe('Calculator Tests', () => {
  test('Addition of two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('Subtraction of two numbers', () => {
    expect(calculator.sub(5, 3)).toBe(2);
  });

  test('Multiplication of two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('Division of two numbers', () => {
    expect(calculator.div(6, 3)).toBe(2);
  });

  test('Division by zero should return Infinity', () => {
    expect(calculator.div(6, 0)).toBe(Infinity);
  });
});
