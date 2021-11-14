const palindromPermutation = (str1, str2) => {
  let hash1 = new Map()
  let hash2 = new Map()

  for(let i in str1){
    if(!hash1.get(str1[i])){
      hash1.set(str1[i], 1)
    }else{
      hash1.set(str1[i], hash1.get(str1[i]) + 1)
    }
  }

  for(let i in str2){
    if(!hash2.get(str2[i])){
      hash2.set(str2[i], 1)
    }else{
      hash2.set(str2[i], hash2.get(str2[i]) + 1)
    }
  }

  let newArr = Object.keys(hash1)
  console.log(newArr)
  for(let i in hash1){
    console.log(hash1[i])
  }
  for(let i in newArr){
    console.log(newArr, hash1.get(newArr[i]))
    if(hash1.get(newArr[i]) !== hash2.get(newArr[i])){
      return false
    }

  }

  return true
}

console.log(palindromPermutation('taco ct', 'atco cta'))