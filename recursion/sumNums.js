function sumNums(num){
  var total = 0
  if(num > 0){
    total += num + sumNums(num - 1)

  }
  return total
}
sumNums(5)
