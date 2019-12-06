function backwardString(str){
  if(str.length > 0){
    console.log(str.slice(-1))
    backwardString(str.slice(0,-1))
  }
}
backwardString('hello')
