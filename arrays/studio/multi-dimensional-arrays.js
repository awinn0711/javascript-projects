const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet0 = [food.split(",")];
let cabinet1 = [equipment.split(",")];
let cabinet2 = [pets.split(",")];
let cabinet3 = [sleepAids.split(",")];

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinet0, cabinet1, cabinet2, cabinet3];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let selectedCabinet = Number(input.question("The cargo hold contains four cabinets. Please select a cabinet number 0 to 3 to search its contents."));
let selectedItem = input.question("What item are you searching for?").toLowerCase();


//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (selectedCabinet < 0 || selectedCabinet > 3) {
    console.log("Error. Please select a cabinet number 0 to 3.");
} else if (cargoHold[selectedCabinet].includes(selectedItem)) {
    console.log(`Cabinet ${selectedCabinet} contains ${selectedItem}.`)
} else {
    console.log(`Cabinet ${selectedCabinet} does NOT contain ${selectedItem}`);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

