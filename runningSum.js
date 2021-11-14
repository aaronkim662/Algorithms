const runningSum = (nums) => {
    for(let num1 = nums.length - 1; num1 > -1; num1--){
      let currentNum = nums[num1]
      for(let num2 = 0; num2 < num1; num2++){
        console.log(currentNum, num2)
        currentNum = nums[num2] + currentNum
      }
      nums[num1] = currentNum
    }
    console.log(nums)
  }
  
  runningSum([1,2,3,4])

//  Result: [ 1, 3, 6, 10 ]