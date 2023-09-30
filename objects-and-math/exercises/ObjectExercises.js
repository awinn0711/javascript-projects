let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {return Math.round(Math.random()*10)}
};

//console.log(superChimpOne.move());

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {return Math.round(Math.random()*10)}
};

let chimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {return Math.round(Math.random()*10)}
};

let doggy = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {return Math.round(Math.random()*10)}
};

let tinyAnimal = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {return Math.round(Math.random()*10)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

let spaceCrew = [superChimpOne, salamander, chimpTwo, doggy, tinyAnimal];

// Print out the relevant information about each animal.

function crewReports(arr) {
   for (i = 0; i < arr.length; i++) {
      console.log(`${arr[i].name} is a ${arr[i].species}. They are ${arr[i].age} years old and weigh ${arr[i].mass} kg. Their ID is ${arr[i].astronautID}.`)
   }
}

crewReports(spaceCrew);

// Start an animal race!

function fitnessTest(arr) {
   let raceResults = [];
   for (i = 0; i < arr.length; i++) {
      let steps = 0;
      let turns = 0;
      while(steps < 20) {
         steps += arr[i].move();
         turns ++;
      } raceResults.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
   }
   return raceResults;
}
console.log(fitnessTest(spaceCrew));