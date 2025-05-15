/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    const digits = n.toString().split('').map(Number);
    const product = digits.reduce((acc, digit) => acc * digit, 1);
    const sum = digits.reduce((acc, digit) => acc + digit, 0);
    return product - sum;
};
