const repeatString = function(inputs, quantity) {
    if (quantity < 0) return "Error";
    let string = '';
    for (let i = 0; i < quantity; i++) {
        string += inputs;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
