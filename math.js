// A simple function that doubles a number.
function double(n) {
  return n * 2;
}

// A function that squares a number.
function square(n) {
  return n * n;
}

// A function that multiplies two numbers.
function multiply(a, b) {
  return a * b;
}

// A function that checks if a number is even.
// It uses the modulo operator (%) to see if there's a remainder when dividing by 2.
function isEven(n) {
  return n % 2 === 0;
}

// A function that checks if a number is odd.
// It uses the result of isEven() to determine the opposite.
function isOdd(n) {
  return !isEven(n);
}

// A function to sum all numbers in an array.
// It uses the reduce method to iterate and accumulate the values.
function sum(numbers) {
    if (!Array.isArray(numbers)) {
        return "Error: Input must be an array.";
    }
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
