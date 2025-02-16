/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let nums = new Set(nums2);
    for (let num of nums1) {
        if(nums.has(num)){
            return num
        }
    }
    return -1;
};