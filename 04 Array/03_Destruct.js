let [A,B,C]  = ['a','b','c'];
console.log(A);
console.log();

let students = ["Rohan","Sohan","Monu","Suraj","Kanchan"];
let [$1, ,$3,$4,$5,$6 = "Nitish"] = students;
console.log($1);
console.log($3, $6);

let fruits = ["apple","banana","orange","mango","kiwi"];
let [first, second,  ...and_so_on] = fruits;

console.log(first,  second);
console.log(and_so_on)