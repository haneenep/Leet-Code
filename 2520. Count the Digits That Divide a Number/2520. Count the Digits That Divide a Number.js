/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    let temp = num;
    let count = 0;
    while (temp !== 0) {
        const digit = temp % 10;
        if (num % digit === 0) count++;
        temp = Math.floor(temp / 10)
    }
    return count;
};