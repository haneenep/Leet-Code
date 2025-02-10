/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    return [...s].reduce((acc,char) => {
        if(!isNaN(char)){
            return acc.slice(0,-1)
        }
        return acc + char
    },'');
};