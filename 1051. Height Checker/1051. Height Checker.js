/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let sortedArr = [...heights].sort((a, b) => a - b);
    return heights.reduce((count, height, i) => count += (height !== sortedArr[i] ? 1 : 0), 0)
};
