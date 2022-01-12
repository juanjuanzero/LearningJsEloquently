console.log("\n--------Evaluating data as code-------\n");

let plusTwo = Function("n", "return n + 2;");
console.log(plusTwo(8)); //10

console.log("\n--------CommonJS-------\n");

//see format-date.js
/*
const {formatDate} = require("./format-date");
console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));
*/
console.log("\n--------ES modules-------\n");

//see format-date.js

import {formatDate}  from "./format-dateES.js";
console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));
