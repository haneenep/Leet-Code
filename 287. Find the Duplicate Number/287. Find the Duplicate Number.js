/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let occu = nums.reduce((res, curr) => {
        res[curr] = (res[curr] || 0) + 1
        return res;
    }, {});
    for (let val of nums) {
        if (occu[val] > 1) {
            return val;
        }
    }
};
