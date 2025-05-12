/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    let res = [];
    let D = s.length;
    let I = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I') {
            res.push(I++)
        } else {
            res.push(D--)
        }
    }
    res.push(I)     // Add the final number
    return res;
};
