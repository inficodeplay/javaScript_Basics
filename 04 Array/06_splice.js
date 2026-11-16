// splice() mutate orgianl array, rather than creating a new array.
// it allows to add or remove element from any position including the middle.
// it return the array of items removed from the array
// if nothing was removed, then an empty array will be returned

// Array.splice(startIndex, itemsToRemove(no. of items wants to remove), item1, item2)

let colors = ["red", "green", "blue"];
colors.splice(0,2, "yellow", "purple");

console.log(colors);

colors.splice(0);
console.log(colors);

let num = [1,2,3,4,5,6];
// remove 3 form num array

num.splice(2,1);
console.log(num)