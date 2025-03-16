/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let n = nums.length
    for (let i = 0; i <= n; i++) {
        if (!nums.includes(i)) {
            return i
        }
    }
};