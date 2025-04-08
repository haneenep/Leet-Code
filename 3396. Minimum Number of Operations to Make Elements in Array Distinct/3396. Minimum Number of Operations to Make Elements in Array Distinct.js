/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let operations = 0;

    while (nums.length > 0) {

        if (nums.length === new Set(nums).size) return operations;

        const elemRemove = Math.min(3, nums.length);
        nums.splice(0, elemRemove);
        operations++
        
    }

    return operations;
};