/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    const index = word.indexOf(ch);
    return index === -1 ? word : word.slice(0, index + 1).split('').reverse().join('') + word.slice(index + 1);
};