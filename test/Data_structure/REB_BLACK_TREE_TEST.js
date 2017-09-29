/**
 * Created by SHENJO on 9/27/2017.
 */


const RBTree = require('../../src/Data_structure/RED_BLACK_TREE');

let testTree = new RBTree();

// fixed array testing
let testArray = [9, 15, 68, 90, 123, 125, 453, 560, 872, 751];
// let testArray = [463, 121, 867, 244, 148];
for (let [index, val] of testArray.entries()) {
  try {
    testTree.insert(val);
  } catch (err) {
    console.log(`exception in index ${index} val=${val}`);
    break;
  }
}
console.log(testTree.inOrder());
console.log(testTree.preOrder());
console.log(testTree.postOrder());

// random array testing
const testLength = 100;
testArray = [];
testTree = new RBTree();
const startTime = new Date();
let val;
for (let i = 0; i < testLength; i++) {
  try {
    val = Math.floor(Math.random() * 1000 + 1);
    testArray.push(val);
    testTree.insert(val);
  } catch (err) {
    console.log(`exception in index ${i} val=${val}`);
    break;
  }
}
console.log(`original array is  ${testArray}`);
console.log(`cost time ${new Date().getTime() - startTime.getTime()}`);
console.log(testTree.inOrder());
console.log(testTree.preOrder());
console.log(testTree.postOrder());


