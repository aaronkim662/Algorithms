// comparing the first two elements
// compare first element throughout elements in the array
// smallest number must be in the 0th index
// increment first pointer and check again
// second pointer is incremented by i + 1...
// Big O -> 0 (n^2)

const bubble = (arr) => {
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      let swap1 = arr[i]
      let swap2 = arr[j]
      if(swap2 < swap){
        arr[i] = swap2
        arr[j] = swap
      }
    }
  }
  return arr

}

console.log(bubble([6,4,2,3,1]))
console.log(bubble([1,4,6,3,9,11,4,20,75,9,-5]))
