/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    let digitFreq = new Array(10).fill(0);

    for (let digit of num) {
        digitFreq[Number(digit)]++
    };

    for (let i = 0; i < num.length; i++) {
        if (Number(num[i]) !== digitFreq[i]) {
            return false;
        }
    }
    return true;
};