const person = {
    name: "Suraj",
    age: 21
};


// Chect give key exist or not in the Object
// <key> in <obj>
console.log("name" in person);

// Object.hasOwn(<obj>, <"key">)
console.log(Object.hasOwn(person, "name"));
console.log();

// How to call function when fun is stored as an obj property (commonly called a method)
const user = {
    name: "Rohan",

    greet: function() {
        console.log(`Hello ${this.name}`);
    }
};

user.greet();

const emp = {
    empId: 10001,
    name: "Rakesh",
    shift: "Night",
    department: "IT",
    experience: "3y",
    email: "rakesh12@gamil.com"
}
// Access whole obj.'s keys
console.log(Object.keys(emp));

// Accessing whole object's property
console.log(Object.values(emp));
console.log();


// print object as array format
console.log(Object.entries(emp));
console.log();
console.log(Object.entries(emp)[1][1]);
console.log();

// how to create copy in target object or marge more than one object
// Object.assign(<target obj>, obj)
let demo = {
    key: "values",
    copy: "text"
};

Object.assign(demo, emp);
// console.log(demo);
console.log(Object.assign({}, emp) === emp)
console.log();

// Now prevent to adding or deleting properties but you can still changes the values of object 
// Object.seal()

Object.seal(demo); // this is prevent to delete property

delete demo.key;
console.log(demo);

// How prevent changing existing properties
Object.freeze(demo);
demo.key = "data";
console.log(demo);
delete demo.key;
console.log()
