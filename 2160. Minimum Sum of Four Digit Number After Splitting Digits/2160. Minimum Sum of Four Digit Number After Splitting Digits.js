/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
    let res = num.toString().split('').sort((a, b) => a - b);
    return parseInt(res[0] + res[2]) + parseInt(res[1] + res[3])
};