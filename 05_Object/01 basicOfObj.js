// Kind of data structure which store data in key-pair value
const gust = {
    name: "Suraj",
    "date of brith" : "22/11/2004",
    job: "software developer"
}

// console.log(gust);
// add new key
gust.state = "Bihar";

// console.log(gust);

// delete key
delete gust.job;
// console.log(gust);


// when key's name comes with space, then we can't access its value using . (dot)
// then [] is use to access key's value
console.log(gust["date of brith"])