/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function (J, S) {
    return [...S].filter(char => J.indexOf(char) !== -1).length
};
