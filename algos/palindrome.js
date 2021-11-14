function palindrome(string){
  let str = ''
  for(let i =string.length - 1;i> -1;i--){
    str += string[i]
  }
  return str === string ? true : false
}
palindrome('rgar')
