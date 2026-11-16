const fun = (x, y = 4) =>  x + y;
// console.log(fun(6))

const ageCal = (age) => {
    if(age < 1)
        console.log("Invalid Input");
    else if(age >= 18)
        console.log("Adult")
    else
        console.log("Minnor !")
}

// ageCal(15)


const age = (age) => {
    if(age < 1)
        console.log("Invalid Input");

}

let now = new Date();
console.log(now)