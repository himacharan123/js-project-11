const calculator = {
  add: (a, b) => {
    return a +b;
  },
  sub: (a, b) => {
    return (a - b);
  },
  multiply: (a, b) => {
    return a * b;
  },

  div: (a, b) => {
    return a / b;
  },
};

console.log(calculator.add(2, 3));
console.log(calculator.sub(2, 3));
console.log(calculator.multiply(2, 3));
console.log(calculator.div(2, 3));
