const {reverse} = require("./reverse");

//get the third item which holds the actual command line argument.
let argument = process.argv[2];
console.log(reverse(argument));