/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
    return String(n).split('').reduce((res, digit, i) => res += i % 2 === 0 ? +digit : -digit, 0);
};