// compare elements
// check if arr[1] < arr[0]
// Ex: there are 6 elements
// length of sub array is 3
// compare all values in sub array
// insert value in sub array where arr[i - 1] < arr[i] < arr[i+1]
// splice element to remove and splice to insert
// while arr[j] < arr[i]

const insertion = (arr) => {
  let index = 0
  while(index < arr.length){
    let secondIndex = index
    while(secondIndex > 0 && arr[secondIndex - 1] > arr[secondIndex]){
      let removeNumber = arr.splice(secondIndex,1)
      arr.splice(secondIndex - 1, 0, removeNumber[0])
      secondIndex--
    }
    index++
  }
  return arr
}
// console.log(insertion([3,1]))
// console.log(insertion([1,3,2,1]))
console.log(insertion([1,4,6,3,9,11,4,20,75,9,-5]))
