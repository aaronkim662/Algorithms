const insertion = (arr) => {
  for(let i = 1; i < arr.length; i += 1){
    console.log('index', i , arr[i])
    for(let j= 0; j < i; j += 1){
      console.log('j index', j, arr[j])
      if(arr[i] < arr[j]){

        let temp = arr.splice(i,1);
        arr.splice(j,0,temp[0])
        console.log('current arr', arr)

      }
    }
  }
  return arr
}

console.log('insertion', insertion([1,4,6,3,9,11,4,20,75,9,-5]))
