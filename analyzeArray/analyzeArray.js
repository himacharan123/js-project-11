export const analyzeArray = (arr) => ({
    average: arr.reduce((acc, curr) => acc + curr) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  });
  
  