/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let setA = new Set();
    let setB = new Set();
    let n = A.length;
    let res = [];
    for (let i = 0; i < n; i++) {
        let count = 0;
        setA.add(A[i])
        setB.add(B[i])
        for (let elem of setA) {
            if (setB.has(elem)) {
                count++
            }
        }
        res.push(count);
    }
    return res;
};