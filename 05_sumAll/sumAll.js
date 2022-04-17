const sumAll = function(firstInt, secondInt) {
    if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt)) return "ERROR";
    if (firstInt < 0 || secondInt <0) return "ERROR";
    if (firstInt > secondInt) {
        
    }

    let sum = 0;
    for (let i = firstInt; i < secondInt + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
