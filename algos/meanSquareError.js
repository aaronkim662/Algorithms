var solution = function(firstArray, secondArray) {
    let total = 0;
    for(let i = 0; i < firstArray.length; i +=1){
      let value = firstArray[i] - secondArray[i]
      let square = Math.pow(value,2)
      total+= square
    }
    return parseFloat(total/firstArray.length)
  }

// solution([1,2,3],[4,5,6]), 9)
// solution([10,20,10,2],[10,25,5,-2]), 16.5)