function arrSum(arr){
  if(arr.length === 0){
    return 0
  }else{
    return arr.pop() + arrSum(arr)
  }
}
console.log(arrSum([1,2,3]))
