/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let positive = nums.filter((num) => num >= 0);
    let negative = nums.filter((num) => num < 0);
    let res = [];
    for (let i = 0; i < positive.length; i++) {
        res.push(positive[i]);
        res.push(negative[i])
    }
    return res;
};
