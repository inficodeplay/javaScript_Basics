let arr = [10,20,30,40,50,60,75,70];
// slice(start, end);
// start-including, end - excludeing
// it return new array

let arr2 = arr.slice(0,5);
console.log(arr2);

// it also supports -ve indexing 
let arr3 = arr.slice(-5);
console.log(arr3);
