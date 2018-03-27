/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function (words) {
    let result = new Set();
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const mapping = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    words.forEach(word => {
        result.add([...word].map(char => mapping[chars.indexOf(char)]).join(''));
    });
    return result.size;
};


console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
