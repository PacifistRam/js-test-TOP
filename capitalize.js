function capitalize(str) {
    const first =  str[0].toUpperCase();
    return first+str.slice(1);
}

module.exports = capitalize;