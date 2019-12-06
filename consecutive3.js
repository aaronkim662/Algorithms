let arr = [1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]

function consec(array){
  for(let i = 0;i<array.length;i++){
    if (array[i] + 1 === array[i+1] && array[i] + 2 === array[i+2]){
     console.log(array[i]+" "+ array[i+1]+ " " +array[i+2])
  }
  }
}

consec(arr)
