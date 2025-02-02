/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let left = 0;
    let maxDiff = -1;
    for(let right = 1; right < nums.length; right++){
        if(nums[right] > nums[left]){
            maxDiff = Math.max(maxDiff,(nums[right] - nums[left]))
        } else {
            left = right
        }
    }
    return maxDiff;
};