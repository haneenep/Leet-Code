/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return nums.sort((a, b) => {
        const freqA = map.get(a);
        const freqB = map.get(b);
        if (freqA === freqB) {
            return b - a;
        }
        return freqA - freqB;
    })
};