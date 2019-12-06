function anagrams(word, words) {
  var narray = []
  for(var i = 0; i < words.length;i++){
   if(alphabet(word) === alphabet(words[i]) && (word.length === words[i].length)){
     narray.push(words[i])
   }
  }
  return narray
}

function alphabet(word){
  word = word.split("")
  word = word.sort()
  word = word.join("")
  return word
}
//alphabet('abab')
//anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
