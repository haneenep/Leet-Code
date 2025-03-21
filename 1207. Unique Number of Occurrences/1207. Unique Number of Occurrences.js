/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let occ = {};
    for (let i = 0; i < arr.length; i++) {
        if (occ[arr[i]]) {
            occ[arr[i]]++
        } else {
            occ[arr[i]] = 1
        }
    }
    const res = Object.values(occ);
    return res.length === new Set(res).size
};