let arr = [1,2,3,5]
const twoSums = (arr,total) => {
  for(let i = 0; i < arr.length; i+=1){
    for(let j = 1; j < arr.length; j +=1){
      if(arr[i] + arr[j] === total){
         return [arr[i],arr[j]]
      }
    }
  }
}

const twoSums = (arr,total) => {
  for(let i = 0; i < arr.length; i+=1){
    let remainder = total - arr[i];
    if(arr.includes(remainder)){
      return [arr[i], arr[arr.indexOf(remainder)]];
    }
  }
}


console.log(twoSums(arr,8))
