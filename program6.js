const prompt = require("prompt-sync")();

function Addition(iNo1, iNo2)
{
    let iAns = 0

    iAns = iNo1 + iNo2

    return iAns
}

function main()
{
    ivalue1 = 0, ivalue2 = 0, iResult = 0;

    ivalue1 = Number(prompt("Enter First number"))
    ivalue2 = Number(prompt("Enter Second number"))

    iResult = Addition(ivalue1, ivalue2)

    console.log("Addition is", iResult)
}
main()