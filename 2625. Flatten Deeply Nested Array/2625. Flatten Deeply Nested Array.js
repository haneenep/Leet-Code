/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {

    let res = [];

    const flatternArray = (flatArr, n) => {
        for (let i = 0; i < flatArr.length; i++) {
            if (Array.isArray(flatArr[i]) && n !== 0) {
                flatternArray(flatArr[i], n - 1);
            } else {
                res.push(flatArr[i])
            }
        }
    }

    flatternArray(arr, n)

    return res;

};