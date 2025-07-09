/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let freq = new Map();
    for(let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    let maxFreq = Math.max(...freq.values())
    let count = 0;
    for(let fre of freq.values()) {
        if(fre === maxFreq) count += fre;
    }
    return count;
};