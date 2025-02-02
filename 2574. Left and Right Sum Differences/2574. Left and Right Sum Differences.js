/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const result = new Array(nums.length);
    let leftSum = 0;
    let rightSum = nums.reduce((sum, num) => sum + num, 0);
    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        result[i] = Math.abs(leftSum - rightSum);
        leftSum += nums[i];
    }
    
    return result;
};
console.log(leftRightDifference([10,4,8,3]))