const person = {
    name: "Alice",
    age: 30
};

// console.log(person.name);
console.log(person.job);

//console.log(person.address.street); // It'll throw error bcs address is undefinied and street can't access

// now comes optional chaining operator
const user = {
    name: "John",
    profile: {
        email: "john@gmail.com",
        address: {
            street: "123 Main St",
            city: "Somewhere"
        }
    }
};

console.log()
console.log(user?.profile?.address?.street);
console.log(user?.profile?.phone?.number);

// if the value before the ?. is null or undefined, js returns undefiened rather than attempting to proceed with the operation and throwing an error.
