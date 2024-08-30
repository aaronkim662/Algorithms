function getMiddle(s){
  var str = s.split('')
  var num = str.length
  if (num%2 === 0){
    return str[num/2 - 1] + str[num/2]
  }else if(num%2 === 1){
    return str[(num-1)/2]
  }
}
getMiddle("tests")
