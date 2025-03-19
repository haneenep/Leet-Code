/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (word.length <= 1) return true;
    const fUpper = word[0] >= 'A' && word[0] <= 'Z';
    const sUpper = word[1] >= 'A' && word[1] <= 'Z';
    if (sUpper) {
        if (!fUpper) {
            return false;
        }
        for (let i = 2; i < word.length; i++) {
            if (!(word[i] >= "A" && word[i] <= "Z")) {
                return false;
            }
        }
    } else {
        for (let i = 2; i < word.length; i++) {
            if (!(word[i] >= "a" && word[i] <= "z")) {
                return false;
            }
        }
    }
    return true
};
