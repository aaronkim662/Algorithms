let arr = [0,1,2,3,4,5,6,7,8,9]
let arr1 = [2,3,7,9]

const missing = (arr1,arr2) => {
  arr1.forEach((ele,i) => {
    arr2.includes(arr1[i]) ? '' : arr2.push(arr1[i])
  })
  return arr2.sort((a,b) => a- b)
}
console.log(missing(arr,arr1))
// Given 2 parameters
// If the number in the first array is not contained in the 2nd array. Push the number in the 2nd array.
// Return 2nd array NOT new array
// Loop through the 2nd and first array at the same time

let numbers = [0,1,2,3,4,5,6,7,8,9]
// let otherNumbers = [2,3,7,9]

// const findMissingNums = (arr1,arr2) => {
//    arr1.forEach((ele,i) => {
//     arr2.includes(arr1[i]) ? '' : arr2.push(arr1[i])
//   })
//   return arr2.sort((a,b) => a- b)
// }

// console.log(findMissingNums(numbers,otherNumbers))
