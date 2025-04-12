/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    return target.length === arr.length && arr.sort((a, b) => a - b).join() === target.sort((a, b) => a - b).join()
};