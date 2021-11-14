let letters = 'abcdefghijklmnopqrstuvwxyz'

console.log(letters.indexOf('z' ) + 1)
let vowels = 'aeiou'
let word = 'zodiac'
let sum = 0
for(let i = 0; i< word.length;i++){
  if(!vowels.indexOf(word[i])){
  sum += letters.indexOf(word[i]) + 1
  }
  console.log(letters.indexOf(word[i]), word[i])

}
console.log(sum)
