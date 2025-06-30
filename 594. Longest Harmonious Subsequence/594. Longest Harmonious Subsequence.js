/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    const map = new Map();
    for (let elem of nums) {
        map.set(elem, (map.get(elem) || 0) + 1);
    }
    let lhs = 0;
    for (let [num, count] of map) {
        if (map.has(num + 1)) {
            lhs = Math.max(lhs, count + (map.get(num + 1)))
        }
    }
    return lhs;
};