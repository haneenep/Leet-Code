/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    const neg = nums.filter(num => num < 0).length;
    const pos = nums.filter(num => num > 0).length;
    return Math.max(neg, pos);
};