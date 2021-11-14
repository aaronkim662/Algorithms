const binaryArrayToNumber = arr => {
  var total = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 1){
      total += Math.pow(2,arr.length - 1 - i)
    }
  }
  console.log(total)
  return total
};
binaryArrayToNumber([1,0,0,1]) // result 9
