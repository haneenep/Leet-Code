/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < num.length; i++) {
        i % 2 === 0 ? even += Number(num[i]) : odd += Number(num[i])
    }
    return even === odd;
};