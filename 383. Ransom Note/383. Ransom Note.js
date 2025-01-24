/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let res = {};
    for (let char of magazine) {
        res[char] = (res[char] || 0) + 1;
    }
    for (let char of ransomNote) {
        if (!res[char] || res[char] === 0) {
            return false;
        }
        res[char]--
    }
    return true;
};