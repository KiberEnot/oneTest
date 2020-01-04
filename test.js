'use strict'

function getMaxSubSum(arr) {
    let value = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0){
            value += arr[i];
        }
    };
    return value;
};
console.log(getMaxSubSum([-1, 2, 3, -9])) //= 5 (сумма выделенных)
console.log(getMaxSubSum([2, -1, 2, 3, -9])) //= 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))// = 11
console.log(getMaxSubSum([-2, -1, 1, 2]))// = 3
console.log(getMaxSubSum([100, -9, 2, -3, 5]))// = 100
console.log(getMaxSubSum([1, 2, 3])) //= 6 (берём все)
console.log(getMaxSubSum([1, -2, 3, 4, -9, 6]))//=7