/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    return operations.reduce((x,op) => op.includes('+') ? x + 1 : x - 1 ,0);
};