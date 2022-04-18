const fibonacci = function(integer) {
    let a = 0;
    let b = 1;
    for (let i = 1; i < integer; i++) {
        const c = b;
        b = a + b;
        a = c;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
