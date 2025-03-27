/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    return nums.reduce((acc,curr) => acc + curr) - nums.join('').split('').map(Number).reduce((acc,curr) => acc + curr);
};