// Array Creation 
let fruits = ["Banana", "PromeGrante", "Guava", "Apple"]

// first index of array is 0
console.log(fruits[0])
console.log(fruits[3])
console.log(fruits[-1], fruits[4]) // Undefinied
console.log()

// Net No. of elements 'length'
console.log(fruits.length)
console.log()

// for last element  push(), pop()
fruits.push("WaterMelon")
console.log(fruits)

fruits.pop() // Last element will removed
console.log(fruits)
console.log()


// form starting of the array
fruits.unshift("Kiwi") // add at index 0
console.log(fruits)

fruits.shift()
console.log(fruits)
console.log()

let numAr = [1,3,5,7,9]
console.log(numAr)

numAr[1] = 2
console.log(numAr)