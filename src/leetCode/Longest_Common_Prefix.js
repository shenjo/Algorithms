/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if(strs.length === 0){
        return '';
    }
    let length = Math.min(...strs.map(str => str.length)), result = '';
    for (let i = 0; i < length; i++) {
        if (!strs.every(str => str[i] === strs[0][i])) {
            break;
        }
        result += strs[0][i];
    }
    return result
};
console.log(longestCommonPrefix(["aa",'aa']));
