/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let res = [];
    let map = {}
    let sorted = [...nums].sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
        if (map[sorted[i]] === undefined) {
            map[sorted[i]] = i;
        }
    }
    for (let num of nums) {
        res.push(map[num])
    }
    return res;
};