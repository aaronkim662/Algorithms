function factorial(num){
  var total = 1
  if(num === 1 || num === 0){
    return 1
  }
  total = total * num * factorial(num-1)
  return total
}
factorial(5)
