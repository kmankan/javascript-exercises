const add = function(a,b) {
	return a + b;
  }

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	const sumArray = arr.reduce((pv, cv) => pv + cv, 0);
    return +sumArray;
};

const multiply = function(arr) {
  let multiplyResult = 1;
  for (let i=0; i < arr.length; i++) {
    multiplyResult *= arr[i];
  }
  return multiplyResult;
};

const power = function(base, exponent) {
	const result = base ** exponent;
  return result;
};

const factorial = function(num) {
	let fact = 1;
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      fact *= i
    }
    return fact; 
  } 
  else return 1;  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

