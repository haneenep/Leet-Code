/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let occ = new Map()
    let arr = grid.flat(Infinity);
    let n = arr.length;
    for (let elem of arr) {
        occ.set(elem, (occ.get(elem) || 0) + 1);
    }
    let repeated = [];
    let remaining = [];
    for (let i = 1; i <= n; i++) {
        if (occ.has(i)) {
            if (occ.get(i) > 1) {
                repeated.push(i);
            }
        } else {
            remaining.push(i);
        }
    }
    return [...repeated, ...remaining];
};