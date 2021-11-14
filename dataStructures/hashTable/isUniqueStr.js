// const isUniqueStr = () => {
//   // check if a string is repeated or unique
//   // const strList = ['test', 'test1', 'test2']
//   const strList = ['test', 'test1', 'test2', 'test']
//   const tab = new Map()
//   for(let i in strList){
//     if(tab.get(strList[i])){
//       return false
//     }else{
//       tab.set(strList[i], strList[i])
//     }
//   }
//   return true
// }

const isUniqueStr = () => {
  // if no additional data strucutres
  // const strList = ['test', 'test1', 'test2']
  const strList = ['test', 'test1', 'test2', 'test']
  let newObj = {}
  for(let i in strList){
    if(newObj[strList[i]]){
      return false
    }else{
      newObj[strList[i]] = true
    }
  }
  return true
}

console.log(isUniqueStr())