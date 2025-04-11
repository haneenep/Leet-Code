/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
    const evens = nums.filter(num => num % 2 === 0).length;
    return Array(evens).fill(0).concat(Array(nums.length - evens).fill(1))
};