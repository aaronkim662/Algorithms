function mostVowels(str){
  var str1 = str.split(" ")

  var maxCount = 0
  var str2 = ''
  var vowels = 'aeiouAEIOU'
  for(var i = 0;i<str1.length;i++){
    var word = str1[i]
    var count = 0
    for(var j = 0;j < word.length;j++){
        if(vowels.indexOf(word[j]) !== -1){
          count ++
        }
     }
  if(count > maxCount){
    maxCount = count
    str2 = word
  }else if(count === 0){
    str2 = ''
  }
  }
  return str2
}
