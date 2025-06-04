/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
    let occ = new Map();
    let difference = 0;
    for (let i = 0; i < t.length; i++) {
        occ.set(t[i], i);
    }
    for (let j = 0; j < s.length; j++) {
        difference += Math.abs(j - occ.get(s[j]));
    }
    return difference;
};