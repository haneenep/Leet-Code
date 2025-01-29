/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let maxDigit = "";
    for (let i = 0; i < num.length; i++) {
        if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
            maxDigit = Math.max(maxDigit, parseInt(num[i]))
        }
    }
    return maxDigit !== "" ? `${maxDigit}${maxDigit}${maxDigit}` : ""
};