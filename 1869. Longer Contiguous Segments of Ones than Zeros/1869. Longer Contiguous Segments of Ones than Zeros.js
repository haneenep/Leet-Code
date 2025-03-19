/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
    let maxOnes = 0;
    let maxZeros = 0;
    let currOnes = 0;
    let currZeros = 0;
    for (let char of s) {
        if (char === '1') {
            currOnes++;
            currZeros = 0;
        } else {
            currOnes = 0;
            currZeros++;
        }

        maxOnes = Math.max(currOnes, maxOnes)
        maxZeros = Math.max(currZeros, maxZeros)
    }

    return maxOnes > maxZeros
};