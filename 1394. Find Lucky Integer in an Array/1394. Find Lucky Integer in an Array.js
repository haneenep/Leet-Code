/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let lucky = -1;
    let map = new Map();
    for (let elem of arr) {
        map.set(elem, (map.get(elem) || 0) + 1)
    }
    for (let [num, freq] of map) {
        if (num === freq && num > lucky) lucky = num;
    }
    return lucky;
};