const reverseString = function(string) {

    let char = []

    for (let i = 1; i <= string.length; i++) {
        char.push(string.at(-i));
    }

    return char.join("");
};

// Do not edit below this line
module.exports = reverseString;