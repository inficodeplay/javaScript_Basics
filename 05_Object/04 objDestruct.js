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

console.log(name, age, city);

const {name: userName, age: userAge} = user;
console.log(userName, userAge);
console.log()
// Nested Object Destructuring
const person = {
    name: "Rahul",
    address: {
        City: "Patna",
        state: "Bihar"
    }
};

const {
    address: {City, state}
} = person;

console.log(City, state);

// Diff Array & Object Destructuring
const guest = {guestName: "Suraj", guestAge: 20};
const {gustName, guestAge} = guest;

const colors = ["Red", "Green", "Blue"];;
const [r,g,b]  = colors;