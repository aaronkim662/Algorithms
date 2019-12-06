function chessBoard(){ // 8x8
  let i = 0;
  let newStr = '';
  while(i != 8){
    newStr += i% 2 === 0 ? ' # # # #\n' : '# # # # \n'
    i++
  }
  return newStr
}
console.log(chessBoard())


function chessBoard1(){
  // 8x8
  let i = 0;
  let newStr = ''
  while(i != 8){
    if(i < 7){
      newStr += i% 2 === 0 ? ' # # # #\n' : '# # # # \n'
    }else{
      newStr += '# # # # '
    }
    i++
  }
  return newStr
}

console.log(chessBoard1())
