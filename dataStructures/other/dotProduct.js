// take the dot product
// what is the dot product
// the product of two vectors
// two ways
// a dot b = |a|*|b| cos(theta)
// a dot b = ax * bx + ay * by
// what if X and Y are N * N matricies
// 2 vectors always 2
// 1 2   5 6
// 3 4   7 8
// 1*5 + 2*6    1*7 + 2*8 // 5 + 12    7 + 16 // 17   23
// 3*5 + 4*6    3*7 + 4*8 // 15 + 24   21 + 32// 39   53
const dot = (arr1, arr2) => {
  let sum = 0
  let newArr = []
  // first loop i =0
  // arr1[i] or arr1[0] = [1,2]

  // second loop j = 0
  // 2nd = arr2[j] = [5,6]
  // let temp = 0
  // third loop k = 0
  // 1st[k] = 1
  // 2nd[k] = 5
  // temp += 1 * 5
  //   third loop, 2nd iteration
  //   1st[k] = 2
  //   2nd[k] = 6
  // 1 * 6
  // if(k === 1st.length - 1) push temp to new Arr
  for(let i in arr1){
    let first = arr1[i]
    let subArr = []
    for(let j = 0; j < arr1.length; j++){
      let temp = 0
      let val1 = arr2[j]
      for(let k = 0; k < val1.length; k++){
        temp += (val1[k] * first[k])
        if(k === (val1.length - 1)){
          subArr.push(temp)
        }
      }
    }
    newArr.push(subArr)
  }
  return newArr
}

console.log(dot([[1,2,3], [3,4,4]], [[5,6,5], [7,8,6]]))