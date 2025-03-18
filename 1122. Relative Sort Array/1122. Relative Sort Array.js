/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let res = [];
    let remaining = [];
    let set = new Set(arr2);

    let count = {}
    for (let ele of arr1) {
        count[ele] = (count[ele] || 0) + 1;
    }

    for(const num of arr2){
        while(count[num]-- > 0){
            res.push(num)
        }
    }

    for(const num of arr1){
        if(!set.has(num) && count[num] > 0){
            remaining.push(num)
        }
    }

    return res.concat(remaining.sort((a,b) => a-b));
};