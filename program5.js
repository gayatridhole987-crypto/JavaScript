const prompt = require("prompt-sync")();

let ivalue1 = 0;
let ivalue2 = 0;
let iresult = 0;

ivalue1 = Number(prompt("Enter first number: "));
ivalue2 = Number(prompt("Enter second number: "));

iresult = ivalue1 + ivalue2;

console.log("Addition is:", iresult);

