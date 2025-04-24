/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    let pairs = 0;
    let set = new Set();
    for (let word of words) {
        const reversed = word.split('').reverse().join('');
        if (set.has(reversed)) {
            pairs++
        } else {
            set.add(word)
        }
    }
    return pairs;
};