const { isUtf8 } = require("buffer");
const fs = require("fs");

//sync
//s.writeFileSync("./test.txt","Hey There")

//Async
//fs.writeFile("./test.txt", "Hey aa", (err) => {});


const result = fs.readFile("./contacts.txt","utf-8")

console.log(result)