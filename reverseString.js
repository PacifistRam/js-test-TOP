function reverseString(string) {
    return string.split("").reduce((acc,char) =>
        char + acc, "");
};

module.exports = reverseString;