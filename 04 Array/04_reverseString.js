console.log("split() change string into array")

let name = "Suraj  ";
console.log(name)
let nameArr = name.split(" ");
console.log(nameArr)

/*
    Parameter of split() is the charactor at which you want to split text like,
    suraj ->  suraj.split("u") --> ["s","raj"]
*/

console.log("reverse") // it will reverse the whole array
let charArray = ["h","e","l","l","o"];
charArray.reverse();
console.log(charArray);console.log()

let arr = ["S","u","r","a","j"];
let joinStr = arr.join("-");
console.log(joinStr)

/*
    join() join each array's element with at given parameter
*/