/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let length = nums.length / 2
    let s = nums.reduce((res,curr) => {
        res[curr] = (res[curr] || 0) + 1
        return res;
    },{})
    for (let ele in s) {
        if (s[ele] >= length) {
            return parseInt(ele);
        }
    }
};