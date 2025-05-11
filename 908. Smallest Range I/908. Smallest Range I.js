/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let max = Math.max(...nums) - k;
    let min = Math.min(...nums) + k;
    return Math.max(max - min, 0)
};
