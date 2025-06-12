/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let map = new Map();
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    for (let char of t) {
        if (!map.has(char) || map.get(char) === 0) {
            return char;
        }
        map.set(char, map.get(char) - 1);
    }
};