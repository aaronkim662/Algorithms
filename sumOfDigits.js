function digital_root(n) {
  // ...
  let str = n.toString()
  let newArr = str.split('');
  if(newArr.length === 1){
    return n
  }
  let sum = 0
  for(let i = 0; i < newArr.length; i += 1){
    sum += parseInt(newArr[i])
  }
  return digital_root(sum)
}