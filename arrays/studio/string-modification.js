const input = require('readline-sync');
let str = "LaunchCode";
let numberOfLetters = Number(input.question("How many letters should we chip chop?"));

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
if (numberOfLetters > 9) {
    let wrongAnswer = numberOfLetters;
    numberOfLetters = 3;
    console.log(`It is not possible to remove ${wrongAnswer} characters from ${str}. The program defaulted to three characters.`);
}

let newString = str.slice(0, numberOfLetters);
let newString2 = str.slice(numberOfLetters);
let finalString = (newString2+newString);
console.log(finalString);



//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original phrase ${str} was changed to ${finalString}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.


