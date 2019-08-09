function printName(firstName, lastName){
    return (firstName +" "+ lastName).toUpperCase();
}

let name = ["ramesh", "kumar"];

console.log(printName(...name));