const caesar = function(string, number) {
    return string
        .split("")
        .map(letter => shiftLetter(letter, number))
        .join("");
};

const codeSet = code => (code <97 ? 65 : 97);

const mod = (a, b) => (a % b + b) % b;

const shiftLetter = (letter, number) => {
    const code = letter.charCodeAt();

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(
            mod(code + number - codeSet(code), 26) + codeSet(code)
        );
    }
    return letter;
};

// Do not edit below this line
module.exports = caesar;
