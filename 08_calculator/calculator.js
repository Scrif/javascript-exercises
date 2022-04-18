const add = function(a,b) {
	return (a + b);
};

const subtract = function(a,b) {
	return (a - b);
};

const sum = function(array) {
	return array.reduce((a,b) => a + b,0)
};

const multiply = function(array) {
  return array.reduce((accumulator, current) => accumulator * current,1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	if (a === 0 || a === 1)
    return 1;
  for (var i = a - 1; i >= 1; i--) {
    a *= i;
  }
  return a;
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
