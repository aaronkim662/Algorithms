function divisibleByThree(str){
  var array = str.split('')
  var i = 0
  var total = 0
  while(i < array.length){
    total += parseInt(str[i])
    i++
  }
  if (total % 3 === 0){
    return true
  }else{
    return false
  }

}
divisibleByThree('12')
//console.log('12'.split(''))
