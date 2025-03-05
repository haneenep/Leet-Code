/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let result = num;
    while (result.endsWith('0')) {
        result = result.slice(0, -1);
    }
    return result || '0';
};