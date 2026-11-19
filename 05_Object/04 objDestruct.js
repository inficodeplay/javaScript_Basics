// It allow to extract properties from an object and store their values in separate variable
const user = {
    name: "Suraj",
    age: 21,
    city: "Samstipur"
};

// const name = user.name;
// const age = user.age;
// and so on 

// here Object destructuring helps
const {name, age, city} = user;

console.log(name);
console.log(age);
console.log(city);