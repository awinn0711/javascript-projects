const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let startsWithA = function (userInput) {
  if (userInput[0] === "a" || userInput[0] === "A") {
    return true;
  } else {
    return false;
  }
}

// TODO 2: write a validator 
// that ensures input is a vowel
let startsWithVowel = function (userInput) {
  let vowels = ["a", "e", "i", "o", "u", "y"];
  if (vowels.includes(userInput[0])) {
    return true;
  } else {
    return false;
  }
}
// Be sure to test your code!
getValidInput("Write something that starts with a vowel: ", startsWithVowel);
