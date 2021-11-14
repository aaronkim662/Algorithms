// import { testFunction } from './testFunction';

const uniqueCharacters = (str) => {
  let storage = new Set()
  for(let i in str){
    if(!storage.has(str[i])){
      storage.add(str[i])
    }else{
      return false
    }
  }
  return true
}

// testFunction(uniqueCharacters('abcdefg'), true)
console.log(uniqueCharacters('abcdefg')) // true