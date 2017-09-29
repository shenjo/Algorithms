/**
 * Created by SHENJO on 8/21/2017.
 */


/**
 * use Set
 * @param s
 * @returns {number}
 */
var lengthOfLongestSubstr = function(s) {
  var list = new Set(), maxLength = 0, leftIndex = 0, rightIndex = 0, len = s.length;
  while (leftIndex < len && rightIndex < len) {
    if (!list.has(s[rightIndex])) {
      list.add(s[rightIndex++]);
      maxLength = Math.max(maxLength, rightIndex - leftIndex);
    } else {
      list.delete(s[leftIndex++]);
    }
  }
  return maxLength;

};
 console.log(lengthOfLongestSubstr('abcabcbb'));

var lengthOfLongestSubstrV2 = function(s) {
  var hashObj = {}, len = s.length, leftIndex = 0, rightIndex = 0,maxLength = 0;
  for (; rightIndex < len;rightIndex++) {
    if (hashObj.hasOwnProperty(s[rightIndex]) && hashObj[s[rightIndex]] >= leftIndex) {
      leftIndex =  hashObj[s[rightIndex]] + 1;
    }
    hashObj[s[rightIndex]] = rightIndex;
    maxLength = Math.max(maxLength,rightIndex-leftIndex+1);
  }
  return maxLength;
};
console.log(lengthOfLongestSubstrV2('abcabcbb'));