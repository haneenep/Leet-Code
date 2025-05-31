/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    return date.split('-').map(d => Number(d).toString(2)).join('-')
};