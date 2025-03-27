/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    return words.reduce((res,word,index) => word.includes(x) ? [...res, index] : res ,[])
};