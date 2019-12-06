function countVowel(str){
  if(str.length === 0){
    return 0
  }
  let count = 0
  if(isAVowel(str[0])){
    count+=1
  }
  count += countVowel(str.slice(1))
  return count
}
function isAVowel(char){
  vowels = ['a','e','i','o','u']
  return vowels.includes(char)
}
countVowel('hood')
