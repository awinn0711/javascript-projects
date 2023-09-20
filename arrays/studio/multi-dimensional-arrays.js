const input = require('readline.sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet1 = [food.split(",")];
let cabinet2 = [equipment.split(",")];
let cabinet3 = [pets.split(",")];
let cabinet4 = [sleepAids.split(",")];

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinet1, cabinet2, cabinet3, cabinet4];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let selectedCabinet = number(input.question("The cargo hold contains four cabinets. Please select one to view its contents."));

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (selectedCabinet < 1 || selectedCabinet > 4) {
    console.log("Error. Please select a cabinet number 1 through 4.");
} else {
    console.log(`${selectedCabinet} contains ${cargoHold[selectedCabinet - 1]}.`)
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
