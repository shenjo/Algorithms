/**
 * Created by SHENJO on 9/25/2017.
 */

/**
 *   钢条切割问题
 给出一个价格表，如下：
 1   2   3   4   5   6   7   8   9   10
 1   5   8   9   10  17  17  20  24  30
 现有长度为n的钢条，求如何切割才能使得价值最大。
 */

function initPrice () {
  let result = {};
  const length = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const price = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
  for (let [index, val] of length.entries()) {
    result[val] = price[index];
  }
  return result;
}

const force_solution = function(m) {
  const priceMapping = initPrice();
  var CUT_ROD = function(n) {
    let bestSplit = 0;
    if (n === 0) {
      return 0;
    }
    // if (n > 10) {
    //   return CUT_ROD(10) + CUT_ROD(n - 10);
    // }
    for (let i = 1; i <= n; i++) {
      bestSplit = Math.max(bestSplit, priceMapping[i] + CUT_ROD(n - i));
    }
    return bestSplit;
  };

  return CUT_ROD(m);
};

const dp_solution = function(n) {
  const priceMapping = initPrice();
  let r = [0],s = [],best;
  for(let i =1;i<=n;i++){
    best = -1;
    for(let j =1;j<=i;j++){
      if(best<priceMapping[j]+r[i-j]){
        best = priceMapping[j]+r[i-j];
        s[i] = j;
      }
    }
    r[i] = best;
  }
  return {best,r};
};
console.log('============force=================');
for (let i = 1; i <= 30; i++) {
  let statrtTime = new Date();
  let result = force_solution(i);
  console.log(`m=${i} .... cost time=${new Date().getTime() - statrtTime.getTime()}........ result=${result}`);
}


console.log('============dynamic=================');
for (let i = 1; i <= 30; i++) {
  let statrtTime = new Date();
  let {best,r} = dp_solution(i);
  console.log(`m=${i} .... cost time=${new Date().getTime() - statrtTime.getTime()}........ result=${best}, cut solution=${r[i]}`);
}





