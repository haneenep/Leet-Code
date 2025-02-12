/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost = cost.sort((a, b) => b - a);
    let totalCost = 0;
    for (let i = 0; i < cost.length; i += 3) {
        totalCost += cost[i] || 0
        totalCost += cost[i + 1] || 0;
    }
    return totalCost;
};