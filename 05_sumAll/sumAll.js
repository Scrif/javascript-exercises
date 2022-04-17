const sumAll = function(firstInt, secondInt) {
    if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt)) return "Error";
    if (firstInt < 0 || secondInt <0) return "Error";

    }
    let sum = 0;
    for (let i = firstInt; i < secondInt + 1; i++) {
        sum += i;
    }
};

// Do not edit below this line
module.exports = sumAll;
