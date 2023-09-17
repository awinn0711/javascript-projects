let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split(" "));
    //the parameter inside () is where the items in the array will be separated, with the character in the parameter removed

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join(' 3 '));
    //the parameter inside () is added between each item of original array

//3) Do split or join change the original string/array?
console.log(str);
console.log(arr);
    //split and join do not change original string or array

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join());
