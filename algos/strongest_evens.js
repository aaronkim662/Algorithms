const strongest_even = (start, end) => {
    let max = 0
    let maxNum = 0
    let count = 0
    for(let i = 0; i < end - start + 1; i += 1){
      let current = start + i
      if(current % 2 === 1){
        max = max
      }else{
        count = divide(current)
        console.log(count, i)
        if(count > max){
          max = count
          maxNum = current
        }
        }
      }
      return maxNum
    }
    
  
  
  const divide = (num) => {
    let count = 0
    for(let i = 0; i < num + 1; i += 1){
      if(num % 2 === 0){
        num /= 2
        count += 1
      }
    }
    return count
  }
  // return the even number that divides into the most
  strongest_even(10,16)