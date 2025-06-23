/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    let odds = 0;
    for (let value of arr) {
        if (value % 2 === 0) {
            odds = 0;
        } else {
            odds++
        }
        if (odds === 3) return true;
    }
    return false;
};