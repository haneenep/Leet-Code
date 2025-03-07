/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
    let set = new Set(nums);
    let triplets = 0;
    for (let num of nums) {
        if (set.has(num - diff) && set.has(num - 2 * diff)) {
            triplets++
        }
    }
    return triplets
};