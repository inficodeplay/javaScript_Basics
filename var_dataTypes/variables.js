number = 260094
BigInt = 123456789987654321065n
string = "Collection of char"

let x; // x is undefinied bcs no value assigned
let y = null // intentionally empty
boolean = false;
symbol = Symbol("A")
id = Symbol("A")

console.log(typeof(number))
console.log(typeof(BigInt))
console.log(typeof(string))

console.log(typeof(x))
console.log(typeof(y))
console.log(typeof(symbol))
console.log(symbol === id)
// Maximam safe  interger
console.log(Number.MAX_SAFE_INTEGER)