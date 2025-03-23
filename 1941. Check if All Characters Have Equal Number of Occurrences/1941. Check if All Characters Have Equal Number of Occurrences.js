/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    let occu = new Map();
    for (let char of s) {
        occu.set(char, (occu.get(char) || 0) + 1)
    }
    let value = occu.values().next().value
    for (let [char, count] of occu) {
        if (count !== value) return false;
    }
    return true;
};