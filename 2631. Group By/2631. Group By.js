/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    return this.reduce((res, curr) => {

        const item = fn(curr);

        if (!res[item]) {
            res[item] = [];
        }

        res[item].push(curr)

        return res;

    }, {})
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */