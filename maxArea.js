// const maxArea = (height) => {
//   let max = 0;
//   let dist = height.length;
//   let mult = dist - 1
//   for(let i = 0; i < dist; i++){
//     let temp = 0
//     let width = mult - i
//     if(height[i] < height[dist-1]){
//       temp = height[i] * width
//     }else if(height[i] > height[dist-1]){
//       temp = height[dist-1] * width
//     }else{
//       temp = height[i] * width
//     }
//     if(temp > max){
//       max = temp
//     }
//     console.log(max, i, height[i])
//   }
//   console.log(max)
//   return max

// }

const maxArea = (height) => {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while(left < right){
    let temp = Math.min(height[left], height[right]) * (right - left)
    max = Math.max(max, temp)
    if(height[left] < height[right]){
      left++
    }else{
      right--
    }
  }
  console.log(max)
  return max

}

maxArea([1,8,6,2,5,4,8,3,7])
// 49

// maxArea([1,1])
// 1

// maxArea([4,3,2,1,4])
// 16

// maxArea([1,2,1])
// 2