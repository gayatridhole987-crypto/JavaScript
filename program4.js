const prompt = require("prompt-sync")();

let ivalue1;
let ivalue2;
let iresult;

ivalue1 = Number(prompt("Enter first number: "));
ivalue2 = Number(prompt("Enter second number: "));

iresult = ivalue1 + ivalue2;

console.log("Addition is:", iresult);