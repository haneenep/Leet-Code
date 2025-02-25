/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const n = nums.length;
    const num = new Set(nums);
    const res = [];

    for (let i = 1; i <= n; i++) {
        if (!num.has(i)) {
            res.push(i);
        }
    }
    
    return res;
};