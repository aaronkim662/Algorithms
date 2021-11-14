// selection sort
// swap numbers based on lowest to high
// nested for loop
// store numbers as min and move it to a specific index
// RETURN original array sorted

const selection = (arr) => {
  for(let i = 0; i < arr.length; i++){
    let min = arr[i]
    for(let j = 1 + i; j < arr.length; j++){
      if(arr[j] < min){
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

// console.log(selection([1,3,2]))
console.log(selection([5,4,3,2,1,0,-1]))
