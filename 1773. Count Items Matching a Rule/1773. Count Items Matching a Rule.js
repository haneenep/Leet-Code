/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
let ruleIndx = { "type": 0, "color": 1, "name": 2 };
var countMatches = function (items, ruleKey, ruleValue) {
    return items.reduce((acc, curr) =>
        curr[ruleIndx[ruleKey]] === ruleValue ? acc + 1 : acc, 0)
};