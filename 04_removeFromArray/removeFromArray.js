const removeFromArray = function(...theArgs) {
    const newArray = [];
    const array = theArgs[0];
    array.forEach((item) => {
        if (!theArgs.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
