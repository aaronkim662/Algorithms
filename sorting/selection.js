
// selection sort
// swap numbers based on lowest to high
// nested for loop
// store numbers as min and move it to a specific index
// RETURN original array sorted

const selection = (arr) => {
  for(let i = 0; i < arr.length;i++){
    console.log('this is arr', i , arr)
    for(let j = i+ 1; j< arr.length; j ++){
      if(arr[i] > arr[j]){
        [arr[i], arr[j]] = [arr[j], arr[i]]
        // let temp = arr[i]
        // arr[i] = arr[j]
        // arr[j] = temp
      }
    }
   }
   return arr
}

console.log(selection([5,4,3,2,1,0,-1]))
