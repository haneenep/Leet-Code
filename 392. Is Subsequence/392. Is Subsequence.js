/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let x = 0;
    for (let i = 0; i < t.length; i++) {
        if (s.includes(t[i]) && s[x] === t[i]) {
            x++;
        }
    }
    return x === s.length;
};