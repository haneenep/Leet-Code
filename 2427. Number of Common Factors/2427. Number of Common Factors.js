/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
    let n = Math.max(a, b);
    let common = 0;
    for (let i = 1; i <= n; i++) {
        if (a % i === 0 && b % i === 0) {
            common++
        }
    }
    return common;
};