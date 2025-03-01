/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    let maxValue = 0;
    for (let i = 0; i < strs.length; i++) {
        let isNumber = true;
        for (let j = 0; j < strs[i].length; j++) {
            if (isNaN(strs[i][j])) {
                isNumber = false;
                break;
            }
        }
        let value = isNumber ? parseInt(strs[i]) : strs[i].length;
        maxValue = Math.max(value, maxValue)
    }
    return maxValue
};