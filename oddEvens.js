function oddEvens(string){
  let left = '';
  let right = '';
  for(let i = 0; i < string.length;i++){
    (i % 2 === 0) ? left += string[i] : right += string[i]
  }
  return left + ' ' + right
}

console.log(oddEvens('hacker'))
