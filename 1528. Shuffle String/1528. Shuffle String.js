/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, ind) {
    let res = [];
    for(let i = 0; i < ind.length; i++){
        res[ind[i]] = s[i]
    }
    return res.join('')
};