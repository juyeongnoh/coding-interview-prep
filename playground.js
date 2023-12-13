let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;
arr2.reverse();

arr1[4] = 6;
console.log(arr1); // [1, 2, 3, 4, 5] (?)
console.log(arr2); // [5, 4, 3, 2, 1] (?)
