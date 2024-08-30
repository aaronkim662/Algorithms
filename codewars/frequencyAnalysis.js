function frequencyAnalysis(str){
  let newOb = {}
  for(let i = 0; i< str.length;i++){
    let letters = str[i]
    if(!newOb[letters]){
      newOb[letters] = 1
    }else{
      newOb[letters] +=1
    }
  }
  return newOb
}
function frequencyAnalysis(str){
  let newOb = {}
  for(let i = 0; i< str.length;i++){
    let letters = str[i]
    !newOb[letters] ? newOb[letters] = 1 : newOb[letters] +=1
    }
  return Object.keys(newOb)
}

console.log(frequencyAnalysis(['a','a','b','b','c']))
// given an array of letters
// RETURN an array of unique letters
// ITERATE through array
// store the words in an object, counting each letters
// Object.keys() returns an array of keys
