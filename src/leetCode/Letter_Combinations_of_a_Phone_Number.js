/**
 * @param {string} digits
 * @return {string[]}
 */

//暴力法
const letterCombinations = function (digits) {
    console.time('force brust')
    if (!digits) {
        return [];
    }
    let mapping = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    if (digits.length === 1) {
        return [...mapping[digits]]
    }
    const input = [...digits].map(d => [...mapping[d]]), len = input.length;
    let index = 0, result = input[index];
    do {
        result = add(result, input[++index])
    } while (index < len - 1)

    console.timeEnd('force brust')
    return result;

};

function add(arrA, arrB) {
    let result = [];
    arrA.forEach(letter => {
        arrB.forEach(item => {
            result.push(letter + item);
        })
    });
    return result;

}


//  递归思想
const mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
const newLetterCombinations = (digits) => {
    console.time('recursive')
    let result = [];
    recursiveAdd(digits, '', digits.length, 0, result);
    console.timeEnd('recursive')
    return result;
};

function recursiveAdd(digits, current, length, index, result) {
    if (index === length) {
        if (current) {
            result.push(current);
        }
        return;
    }
    let len = mapping[digits[index]].length;
    for (let i = 0; i < len; i++) {
        recursiveAdd(digits, current + mapping[digits[index]][i], length, index + 1, result);
    }
}


// letterCombinations("23456789");
newLetterCombinations("23456789");
