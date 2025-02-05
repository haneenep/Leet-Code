/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let words = s.split(' ');
    let res = new Array(words.length);
    for (let word of words) {
        let pos = word.slice(-1) - 1;
        res[pos] = word.slice(0, -1);
    }
    return res.join(' ')
};