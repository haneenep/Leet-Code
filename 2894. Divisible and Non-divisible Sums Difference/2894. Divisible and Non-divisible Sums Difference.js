/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    let s1 = 0;
    let s2 = 0;
    for (let i = 1; i <= n; i++) {
        if (i % m == 0) {
            s1 += i
        } else {
            s2 += i
        }
    }
    return s2 - s1;
};