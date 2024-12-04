import { analyzeArray } from './analyzeArray.js'; 

describe('Analyze Array Tests', () => {
  test('Analyzes an array', () => {
    expect(analyzeArray([1, 2, 3])).toEqual({
      average: 2,
      min: 1,
      max: 3,
      length: 3,
    });
  });
});
