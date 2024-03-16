// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const items = require("./6-alternative-flavours");
const singlePerson = require("./6-alternative-flavours");
//console.log(names);
require("./7-mind-granade");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

console.log("hello");

// console.log(items);
// console.log(singlePerson);
