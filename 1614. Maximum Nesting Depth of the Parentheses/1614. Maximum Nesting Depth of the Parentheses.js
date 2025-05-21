/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let currentDepth = 0;
    let res = 0;
    for (let char of s) {
        if (char === '(') {
            currentDepth++;
            res = Math.max(res, currentDepth);
        } else if (char === ')') {
            currentDepth--
        }
    }
    return res;
};