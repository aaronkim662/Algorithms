// selection sort
// swap numbers based on lowest to high
// nested for loop
// store numbers as min and move it to a specific index
// RETURN original array sorted

const selection = (arr) => {
  for(let i = 0; i < arr.length; i++){
    let min = i
    for(let j = 1 + i; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}

// console.log(selection([6,3,2,2,3]))
console.log(selection([6,5,2,1,3, 3]))
