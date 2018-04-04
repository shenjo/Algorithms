/**
 * @return {boolean}
 */
//最直接的想法就是分三次遍历，每次检验一种规则
// 改进的做法是依次遍历这81个元素，遍历到的元素自然归类并校验

const isValidSudoku = function (board) {
    //初始化验证行规则的9个Set
    const rowRules = new Array(9).fill(0).map(() => new Set());
    //初始化验证列规则的9个Set
    const colRules = new Array(9).fill(0).map(() => new Set());
    //初始化验证3*3规则的9个Set
    const mixedRules = new Array(9).fill(0).map(() => new Set());

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let currentVal = board[row][col];
            // 计算当前行列的元素属于哪个mixedRule
            const mixedIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3)
            // 检验是否符合行，列,混合规则。 思路很简单，对应行/列上是否已经有重复的
            if (currentVal === '.') {
                // 应该跳过
            }
            else if (rowRules[row].has(currentVal) || colRules[col].has(currentVal) || mixedRules[mixedIndex].has(currentVal)) {
                return false;
            } else {
                rowRules[row].add(currentVal);
                colRules[col].add(currentVal);
                mixedRules[mixedIndex].add(currentVal);
            }


        }
    }
    //能在循环结束还不return说明有效
    return true;
};


