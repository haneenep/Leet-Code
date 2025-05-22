/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for(let elem of accounts) {
        let res = elem.reduce((acc,curr) => acc + curr, 0);
        maxWealth = Math.max(maxWealth, res);
    }
    return maxWealth;
};