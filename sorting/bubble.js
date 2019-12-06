const sorting = (arr) => {
  let turn = true;
  while(turn){
    turn = false
    for(let i = 0; i < arr.length - 1; i += 1){
          console.log('index', i , arr[i], arr[i+1])

      if(arr[i] > arr[i+1]){
        // let temp = arr[i];
        // arr[i] = arr[i+1];
        // arr[i+1] = temp
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        turn = true
      }
    }
  }
  return arr
}
console.log('bubble', sorting([1,4,6,3,9,11,4,20,75,9,-5]))
