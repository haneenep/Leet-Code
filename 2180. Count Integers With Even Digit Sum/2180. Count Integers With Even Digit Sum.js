/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        let sum = String(i).split('').reduce((acc, curr) => acc + Number(curr), 0)
        if (sum % 2 === 0) {
            count++
        }
    }
    return count;
};