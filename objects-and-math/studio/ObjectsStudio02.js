// Code your orbitCircumference function here:
let orbitCircumference = function(radius) {
  return Math.round(Math.PI * radius * 2);
}
//console.log(orbitCircumference(2000));

// Code your missionDuration function here:
function missionDuration(numOrbits, radius = 2000, speed = 28000) {      //radius is in km, speed is km/hr
  let distance = numOrbits * orbitCircumference(radius);
  let duration = Math.round(distance/speed * 100)/100;
  console.log(`The mission will travel ${distance} km around the planet, and it will take ${duration} hours to complete.`);
  return duration;
}
// console.log(missionDuration(5));

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, radius = 2000, speed = 28000) {
  let hours = missionDuration(3, radius, speed);
  let oxygenconsumed = Math.round(candidate.o2Used(hours)*1000)/1000;
  return `${candidate.name} will perform the spacewalk, which will last ${hours} hours and require ${oxygenconsumed} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];

 console.log(oxygenExpended(selectRandomEntry(crew), 5000, 15000));