/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        if (arr[i] === 0) {
            arr.splice(i + 1, 0, 0)
            i++
        }
    }
    arr.splice(arrLength);
};