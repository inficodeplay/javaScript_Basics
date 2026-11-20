import data from "./05 JSON.json" with {type: "json"};

// import - used to bring data
// data - variable that will hold the imported data
// from - json file path
// with provides additional info about  imported file

// console.log(typeof data);

// JSON.stringify - convert Object to json
console.log(JSON.stringify(data, ["list of courses"],2));

// JSON.stringify(value, replacer, space);
// value - required para
// replacer - controls wheather a property should be include or not
// space - controals indentation

// JSON.parse(): JSON string to js Object
const json = '{"name": "Lion", "age": 45,"weight": 64}'

const object = JSON.parse(json)