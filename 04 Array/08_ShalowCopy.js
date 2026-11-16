// concat(), slice() are the way to form duplicate array

const main = [1,2,3];
// const empty = [];
// const copyArr = empty.concat(main);

const duplicateArr = [].concat(main);
console.log(duplicateArr);
console.log(`Dulicate array types: ${typeof(duplicateArr)}`)
console.log(`Origanal Array types: ${typeof(main)}`);

console.log(`But both are different array object: ${(main === duplicateArr)}`);
console.log();

// when slice()  without arguments  is return entire array
// it create new array
const oriVal = [2.3,2.4,2.5];
const shalCopy = oriVal.slice();
console.log(shalCopy);
// console.log(oriVal === shalCopy);

// (...) it create new array which menas  we can modify the copy without  affecting the orignal array.
// spread syntax
const arr = ["Diwali","Holi",["Durga","Ravan","Ram"],"Dussehra","Chhath"];
let copy = [...arr];
console.log(copy);
copy[2].push("Colours");
console.log(copy);
console.log(arr)

// when copy an array techincally we copied only outer element not, inner element like ['a',[1,3,4],'b','c'] here [1,3,4] will no copy