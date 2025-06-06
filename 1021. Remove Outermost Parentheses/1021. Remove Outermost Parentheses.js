/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let depth = 0;
    let res = [];
    for (let char of s) {
        if (char === '(' && depth++) res.push(char);
        if (char === ')' && --depth) res.push(char);
    }
    return res.join('');
};