/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth term of the count-and-say sequence.

  Note: Each term of the sequence of integers will be represented as a string.*/

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = n => {
  const cache = {
    1:'1',
    2:'11',
    3:'21',
    4:'1211',
    5:'111221'
  };
  if(n<=5){
    return cache[n];
  }
  let result ;
  for(let i=6;i<=n;i++){
    result = '';
    let str = cache[i-1];
    let rest = str;
    do{
       const {current,count,restStr} = find(rest);
       rest = restStr;
       result += `${count}${current}`;
    }while(rest)
    cache[i] = result;
  }
  return cache[n];
};

const find = str => {
  const index = [...str].findIndex(char => char !== str[0]);
  return {
    current:str[0],
    count: index < 0 ? str.length : index,
    restStr:index<0 ? '' :str.substr(index)
  }
};

console.log(countAndSay(7))