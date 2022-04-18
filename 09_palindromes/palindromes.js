const palindromes = function (string) {
    var re = /[^A-Za-z0-9]/g;
    var lower = string.toLowerCase().replace(re, '');
    var reverseString = lower.split('').reverse().join('');
    return reverseString === lower;
};

// Do not edit below this line
module.exports = palindromes;
