/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    let res = new Set();
    for (let char of s) {
        if(res.has(char)){
            return char;
        }
        res.add(char)
    }
};