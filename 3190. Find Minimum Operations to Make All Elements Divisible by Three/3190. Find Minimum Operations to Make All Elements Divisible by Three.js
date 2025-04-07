/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    return nums.filter(elem => elem !== 0 && elem % 3 !== 0).length
};