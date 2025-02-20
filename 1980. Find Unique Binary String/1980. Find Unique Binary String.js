/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    let n = nums[0].length;
    let res = '';
    for(let i = 0; i < n; i++){
       res += nums[i][i] === '0' ? '1' : '0';
    }
    return res;
};