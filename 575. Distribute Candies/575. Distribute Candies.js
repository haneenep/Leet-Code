/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    const candies = new Set(candyType);
    return Math.min(candyType.length / 2, candies.size)

};