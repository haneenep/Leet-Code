/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
    let freq = [...s].reduce((map, char) =>
        map.set(char, (map.get(char) || 0) + 1), new Map);

    let frequencies = [...freq.values()];

    let evens = frequencies.filter(count => count % 2 === 0);
    let odds = frequencies.filter(count => count % 2 !== 0);

    let maxOdd = odds.length ? Math.max(...odds) : 0;
    let maxEven = evens.length ? Math.min(...evens) : 0;

    return maxOdd - maxEven;
};