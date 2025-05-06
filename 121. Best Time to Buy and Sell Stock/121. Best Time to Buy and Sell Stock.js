/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let lowPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        if (price < lowPrice) {
            lowPrice = price;
        } else {
            maxProfit = Math.max(maxProfit, price - lowPrice);
        }
    }
    return maxProfit;
};
