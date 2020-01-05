'use strict'

function getMaxSubSum(arr) {
    let maxSum = 0;
    let sum = 0;
    for (let i of arr) {
        sum += i;
        if (sum < 0) {
            sum = 0;
        } else if (sum > maxSum){
            maxSum = sum;
        };
    };
    return maxSum;
};
console.log(getMaxSubSum([-1, 2, 3, -9])) //= 5 (сумма выделенных)
console.log(getMaxSubSum([2, -1, 2, 3, -9])) //= 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))// = 11
console.log(getMaxSubSum([-2, -1, 1, 2]))// = 3
console.log(getMaxSubSum([100, -9, 2, -3, 5]))// = 100
console.log(getMaxSubSum([1, 2, 3])) //= 6 (берём все)
console.log(getMaxSubSum([1, -2, 3, 4, -9, 6]))//=7