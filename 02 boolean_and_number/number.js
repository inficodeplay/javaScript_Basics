const positiveNumber = 20;
const negativeNumber = -30;
const gravityConstant = 9.56;

console.log(typeof positiveNumber, typeof negativeNumber,typeof gravityConstant)

let a = 0, b = 3;
let  c = a;
a = b;
b = c;
let div = a/b;
console.log(div, typeof div)
console.log()

// concatenation
let model = 'SM F';
let num = 6;
let sum = model + num;
let diff = model - num; // NaN Not a Number
console.log("sum is : ", sum, typeof sum)
console.log("difference is: ", diff, typeof diff)
