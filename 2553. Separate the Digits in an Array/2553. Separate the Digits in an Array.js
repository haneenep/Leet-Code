/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
    return nums.flatMap(num => num.toString().split('').map(Number))
};