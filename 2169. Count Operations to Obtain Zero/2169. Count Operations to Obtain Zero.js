/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
    let operations = 0;
    while (num1 !== 0 || num2 !== 0) {
        if (num1 > num2) {
            operations += Math.floor(num1 / num2);
            num1 = num1 % num2;
        } else {
            operations += Math.floor(num2 / num1);
            num2 = num2 % num1;
        }
        operations++
    }
    return operations
};