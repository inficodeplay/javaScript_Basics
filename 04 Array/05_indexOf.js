// "element" is index par hai at first occurance
// arr.indexOf(element, fromIndex(optional))
// return -1 if no match found
// it is casesenstive
let fruits = ["apple", "banana", "mango","apple","guava","grapse","kiwi","coconut","watemelon","pineapple"];
let $1_apple = fruits.indexOf("apple");
let $2nd_apple = fruits.indexOf("apple", 1);
console.log(`first occurrence apple ${$1_apple}`);
console.log(`2nd occurrence apple ${$2nd_apple}`);
