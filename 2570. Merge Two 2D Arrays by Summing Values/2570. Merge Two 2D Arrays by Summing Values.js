/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    let map = new Map();

    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i][0], (map.get(nums1[i][0]) || 0) + nums1[i][1]);
    }

    for (let j = 0; j < nums2.length; j++) {
        map.set(nums2[j][0], (map.get(nums2[j][0]) || 0) + nums2[j][1]);
    }

    return [...map.entries()].sort((a, b) => a[0] - b[0]);
};
