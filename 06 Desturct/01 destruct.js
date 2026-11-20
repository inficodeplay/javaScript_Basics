// set default value 
let person = {name: "Alice", age: 30, city: "New York"};
let {name, age, country = "Unknown"} = person;

console.log(country);
console.log(person);
console.log()

const recipe = {
    name: "Chocolate Cake",
    ingredients: {
        flour: "2 cups",
        suger: "1 cup"
    }
};

const { ingredients : {flour}} = recipe;
console.log(flour);
// or 
const $flour = recipe.ingredients.flour;
console.log($flour);
console.log()

let $name = "Bob";
let $age = 21;
let $_person = {$name, $age};
console.log($_person);
console.log()
function createPerson(name, age) {
    return {name, age};
}

let $person = createPerson("Suraj", 21);
console.log($person);