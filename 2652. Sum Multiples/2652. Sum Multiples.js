/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i % 3 === 0 || i % 5 === 0 || i % 7 === 0 ? i : 0
    }
    return sum;
};