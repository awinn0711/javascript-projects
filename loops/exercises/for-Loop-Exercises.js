/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
//a. 
for (let i = 0; i <21; i++) {
  console.log(i);
}
//b.
for (let odd = 3; odd <30; odd+=2) {
  console.log(odd);
}
//c.
for (let even = 12; even >-15; even -=2) {
  console.log(even);
}
//d.
for (let k = 50; k >19; k--) {
  if (k%3 === 0) {
    console.log(k);
  };
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
let str = "LaunchCode";
let arr = [1, 5, 'LC101', 'blue', 42]

for (i=0; i<arr.length; i++) {
  console.log(arr[i]);
}

for (j=1; j<=str.length; j++) {
  console.log(str[str.length - j]);
}


/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  let numArr = [2,3,13,18,-5,38,-10,11,0,104];
  let evenArr = [];
  let oddArr = [];

  for (let k=0; k<numArr.length; k++) {
    if (numArr[k]%2===0) {
      evenArr.push(numArr[k]);
    } else {
      oddArr.push(numArr[k]);
    }
  }
  console.log(evenArr);
  console.log(oddArr);
  