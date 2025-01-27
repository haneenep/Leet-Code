/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let amount = 0;
    let currDay = 0;
    let week = 1
    for (let i = 1; i <= n; i++) {
        amount += week + currDay;
        currDay++
        if (i % 7 === 0) {
            currDay = 0;
            week++
        }
    }
    return amount;
};