const replaceSpaces = (str) => {
  let newStr = ''
  for(let i in str){
    if(str[i] === ' ' && (str[i - 1] !== ' ' && str[i + 1] !== ' ')){
      newStr += '!'
    }
    if(str[i] !== ' '){
      newStr += str[i]
    }
  }
  return newStr
}

console.log(replaceSpaces('test test'))
console.log(replaceSpaces('Mr  John  Smith    ', 13))

const urlify = (str, num) => {
  let newStr = replaceSpaces(str) // n

  if(newStr[newStr.length - 1] === '!'){
    newStr = newStr.substring(0, newStr.length - 1)
  }

  // newStr = newStr.replace('!', '%20')

  while(newStr.includes('!')){
    newStr = newStr.replace('!', '%20') //n^2
  }
  return newStr

}
console.log(urlify('Mr  John  Smith    ', 13))

