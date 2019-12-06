
let newStr = ''
function palinR(str){
  if(str.length > 0){
    newStr = newStr + (str.slice(-1))
    palinR(str.slice(0,-1))
  }
  return newStr === str ? true : false

}
function isPalin(str){
  let rev = reverse(str);
  return rev === str ? true : false

}
