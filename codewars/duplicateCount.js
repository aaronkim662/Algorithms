const duplicateCount = (text) => {
    text = text.toLowerCase().split('');
    let obj = {}
    let count = 0
    for(let i = 0; i < text.length; i += 1){
      (obj[text[i]] === undefined) ? obj[text[i]] = 1 : obj[text[i]] += 1  
    }
    let newArr = Object.values(obj)
    newArr.forEach(ele => (ele) > 0 ? count+=1 : count += 0)
    return count
  }
  
  duplicateCount('aabbccdd')