/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let words = [...s1.split(' '), ...s2.split(' ')];
    return words.filter((word) => words.indexOf(word) === words.lastIndexOf(word));
}; 
