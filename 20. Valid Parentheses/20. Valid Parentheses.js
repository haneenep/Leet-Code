/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if(s.length === 0) return true;
    if(s.length % 2 !== 0) return false;

    let stack = [];

    let pairs = {
        '}': '{',
        ')': '(',
        ']': '['
    };

    for(let char of s) {
        if(!pairs[char]) {
            stack.push(char)
        } else if (stack.pop() !== pairs[char]){
            return false;
        }
    }
    return stack.length === 0;
}
