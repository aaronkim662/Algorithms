// function findMax(arr) {
//   let current = arr[0]
//   for(let i = 0; i < arr.length;i++){

//     let next = arr[i+1]
//     if(next > current){
//       current = next
//     }
//   }
//   return current
// }
function findMax(arr) {
  if(arr[0] > arr[1]){
      arr.splice(1,1)
    }else if(arr[0] < arr[1]){
      arr.splice(0,1)
    }
    console.log(arr)
    if(arr.length === 1){
    console.log(arr[0])
      return arr[0];
    }
    return findMax(arr);  
}
console.log(findMax([2, 1, 9, 20, 5]))
