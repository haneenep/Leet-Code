/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    let numSet = new Set(nums);
    let k = -1;
    for(let val of numSet){
        if(val > 0 && numSet.has(-val)){
            k = Math.max(val,k)
        }
    }
    return k;
};