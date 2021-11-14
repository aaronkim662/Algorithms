const threeSum = (nums) => {
  let arr = [];
  for(let i = 0; i < nums.length; i++){
    let temp = []
    let initial = nums[i]
    for(let j = i + 1; j< nums.length;j++){
      let second = nums[j]
      for(let k = j + 1; k < nums.length; k++){
        let third = nums[k]
        if(initial + second + third === 0){
          temp = [initial, second, third]
          temp.sort((a,b) => a - b )

          if(arr.length > 0){
            for(let p = 0; p < arr.length; p++){
              if(arr[p][0] === temp[0] && arr[p][1] === temp[1] && arr[p][2] === temp[2]){
                console.log(p, arr, temp)
                p = arr.length
              }else{
                arr.push(temp)
              }
            }
          }else{
            arr.push(temp)
          }
        }
      }
    }
  }
  return arr
}

// console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([3,0,-2,-1,1,2]))
