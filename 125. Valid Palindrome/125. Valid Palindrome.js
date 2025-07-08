/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const alphanumeric = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    return alphanumeric === alphanumeric.split('').reverse().join('')
};