/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
    if (nums.length < 3) return -1;
    const [a, b, c] = [nums[0], nums[1], nums[2]];
    const sorted = [a, b, c].sort((x, y) => x - y);
    return sorted[1];
};