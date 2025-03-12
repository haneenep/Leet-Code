/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    const newNums = new Set();
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (newNums.has(nums[i])) {
            newNums.delete(nums[i])
            count++
        } else {
            newNums.add(nums[i])
        }
    }
    return [count, newNums.size]
};