/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
    let count = 0;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {

        if (map.has(nums[i])) {

            for (let index of map.get(nums[i])) {
                if ((index * i) % k === 0) {
                    count++
                }
            }

        } else {
            map.set(nums[i], []);
        }
        map.get(nums[i]).push(i);

    }

    return count;

};