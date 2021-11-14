const maxSum = (nums) => {
  let currentSum = nums[0]
  let maxSum = nums[0]
  for(let i = 1; i < nums.length; i++){
      let num = nums[i]
      currentSum = Math.max(currentSum + num, num)
      maxSum = Math.max(maxSum, currentSum)
  }
  return maxSum
}

console.log(maxSum([-2,1,-3,4,-1,2,1,-5,4])) // 6