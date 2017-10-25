/**
 * Created by SHENJO on 10/16/2017.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  let leftChars = [], index = 0;
  const length = s.length;
  if ((length % 2) !== 0) {
    return false;
  }
  let mapping = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  while (index < length) {
    let char = s[index];
    if (char === '(' || char === '{' || char === '[') {
      leftChars.push(char);
    } else {
      let another = leftChars.pop();
      if (mapping[another] !== char) {
        return false;
      }
    }
    index++;
  }
  return leftChars.length <= 0;
};

console.log(isValid('()()'))



