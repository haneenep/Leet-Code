/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0
    let map = new Map()
    for(let num of nums){
        if(map.has(num)){
            count += map.get(num)
        } 
        map.set(num, (map.get(num) || 0) + 1);
    }
    return count;
};