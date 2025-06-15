/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let freq = {};
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1
    }
    return Object.entries(freq).sort((a, b) => b[1] - a[1]).reduce((res, [char, count]) => res += char.repeat(count), '');
};