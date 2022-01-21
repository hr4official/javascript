// importing package

const readline = require("readline")

// creating our interface

const calcInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    //prompt: "DefectiveDetective",
});

calcInterface.question("Enter the first number: ", (fristInput) => {
    const firstnumber = Number(fristInput);
    
    if(isNaN(firstnumber)){
        // deal with wrong input
    }
})
