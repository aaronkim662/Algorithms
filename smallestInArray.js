const smallest = (arr) => {
  let min = arr[0];
  for(let i = 0; i < arr.length;i++){
    for(let j = 1; j< arr.length; j ++){
      if(arr[i] > arr[j]){
        min = arr[j]
      }
    }
  }
  return min
}
