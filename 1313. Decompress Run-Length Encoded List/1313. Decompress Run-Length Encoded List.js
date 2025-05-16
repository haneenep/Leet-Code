/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length; i += 2) {
        let freq = nums[i];
        let val = nums[i + 1];
        res.push(...Array(freq).fill(val));
    }
    return res;
};
