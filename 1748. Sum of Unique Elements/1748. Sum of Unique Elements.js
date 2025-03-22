/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let occu = {};
    let sum = 0;
    for (let elem of nums) {
        if (occu[elem] === undefined) {
            occu[elem] = 1;
            sum += elem
        } else if (occu[elem] === 1) {
            occu[elem] = 2;
            sum -= elem
        }
    };
    return sum;
};