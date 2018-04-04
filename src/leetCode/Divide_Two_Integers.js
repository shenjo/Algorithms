/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

// TIME LIMITED EXCEED
const divide = function (dividend, divisor) {
    if (divisor === 0) {
        return Number.MAX_VALUE
    }
    let result = 0;
    const negative = (divisor < 0 && dividend >= 0 || divisor > 0 && dividend < 0);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while (dividend - divisor >= 0) {
        dividend = dividend - divisor;
        result++;
    }
    return negative ? -result : result;
};


// my another solution
// 每次减后扩大被除数一倍， 1+2+4

const divided = (dividend,divisor)=>{
    if (divisor === 0) {
        return Number.MAX_VALUE
    }
    let result = 0;
    const negative = (divisor < 0 && dividend >= 0 || divisor > 0 && dividend < 0);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let changedDivisor = divisor;
    let currentAdd = 1;
    if(dividend === Math.pow(2,31)){
        return dividend -1;
    }
    while(dividend - changedDivisor >= 0){
        dividend = dividend - changedDivisor;
        changedDivisor += changedDivisor;
        result += currentAdd;
        currentAdd += currentAdd;
        if(dividend-changedDivisor<0){
            changedDivisor = divisor;
            currentAdd = 1;
        }
    }
    return negative ? -result : result;
}

function test(fn,...args){
    console.time(fn.name);
    console.log(fn.apply(null,args));
    console.timeEnd(fn.name)
}

test(divide,100000,2);
test(divided,100000,2);
