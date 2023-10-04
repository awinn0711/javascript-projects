function randomFromArray(arr){
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

let animalArray = ["dog", "cat", "owl", "rabbit"];
//.log(randomFromArray(animalArray));

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;
