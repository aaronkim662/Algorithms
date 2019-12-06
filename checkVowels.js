const checkVowels = (str) => {
  const vowels = 'aeiou'
  for(let i = 0; i < str.length;i+=1){
    if(vowels.includes(str[i])){
      return true
    }
  }
}
