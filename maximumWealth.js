const maximumWealth = (account) => {
    let m = account.length
    let n = account[0].length
    let mostWealth = 0
    for(let i = 0; i < m; i++){
      let currentArray = account[i]
      let internalSum = 0
      for(let j =0; j < n; j++){
        internalSum = internalSum + currentArray[j]
      }
      if(internalSum > mostWealth){
        mostWealth = internalSum
      }
    }
    return mostWealth
  }
  
  maximumWealth([[2,8,7],[7,1,3],[1,9,5]]) // 17
  maximumWealth([[1,5],[7,3],[3,5]]) // 10