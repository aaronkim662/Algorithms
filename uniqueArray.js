function uniqueArray(length,num){
  let newArr = [];
  while(newArr.length < length){
    let rand = Math.floor(Math.random() * num);
    newArr.includes(rand) ?  '': newArr.push(rand);
  }
  return newArr
}
console.log(uniqueArray(5,10))

 // First parameter = Length of array
// Second parameter = Range from 0 to max
// Given length of array
// Each index contains a number from 0 - maxNumber
// Each number is different than each other
// Return a new array with numbers
// Loop through until the length of the new array meets the number of the first parameter
// Randomize a number for each index of new array
// Check if that number is contained inside the new array
// If its not, add it to array. If so go back to beginning of loop.
