/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let set = new Set(allowed);
    let count = 0;
    for (let word of words) {
        let isConsistent = true
        for (let j = 0; j < word.length; j++) {
            if (!set.has(word[j])) {
                isConsistent = false;
            }
        }
        if (isConsistent) {
            count++
        }
    }
    return count;
};