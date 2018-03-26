/**
 * Created by SHENJO on 10/25/2017.
 */
/**
 * @param {number} n
 * @return {string[]}
 */

var add = function(left, right, stack, s) {
  if (left === 0 && right === 0) {
    stack.push(s);
    return;
  }
  if (left === right) {
    add(left - 1, right, stack, s + "(");
  } else if (left === 0) {
    add(left, right - 1, stack, s + ")");
  } else {
    add(left - 1, right, stack, s + "(");
    add(left, right - 1, stack, s + ")");
  }
};

var generateParenthesis = function(n) {
  var stack = [];
  add(n, n, stack, "");
  return stack;
};

console.log(generateParenthesis(4))

































// 指定括号对的数量，输出所有合法的组合