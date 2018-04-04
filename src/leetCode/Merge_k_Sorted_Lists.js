function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode[]} lists
 * @return {Array}
 */
const mergeKLists = function (lists) {
    let result = [];
    let readLine = [], end = false;
    do {
        readLine = [];
        readVal(lists, lists.length, 0, readLine);
        readLine = readLine.filter(val => val !== Number.MAX_VALUE);
        if (readLine.length === 0) {
            end = true;
        } else {
            let min = Math.min(...readLine);
            let index = readLine.indexOf(min);
            lists[index].shift();
            result.push(min)
        }
    } while (!end);
    return result;

};

function readVal(lists, totalLength, currentLength, result) {
    if (currentLength === totalLength) {
        return result;
    }
    let currentVal = (lists[currentLength] && lists[currentLength].length > currentLength) ? lists[currentLength][currentLength] : null;
    result.push(currentVal ? currentVal : Number.MAX_VALUE);
    return readVal(lists, totalLength, currentLength + 1, result);
}


console.log(mergeKLists([[]]));

