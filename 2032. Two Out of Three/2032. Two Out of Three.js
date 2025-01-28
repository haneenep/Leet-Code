/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const set3 = new Set(nums3);

    const mapCount = new Map();

    for (let num of set1) {
        mapCount.set(num, (mapCount.get(num) || 0) + 1);
    }
    for (let num of set2) {
        mapCount.set(num, (mapCount.get(num) || 0) + 1);
    }
    for (let num of set3) {
        mapCount.set(num, (mapCount.get(num) || 0) + 1);
    }
    let res = [];
    for (const [num, count] of mapCount) {
        if (count > 1) {
            res.push(num)
        }
    }
    return res;
};