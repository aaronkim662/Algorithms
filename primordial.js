const prime = (num) => {
    // return num === 1 || num === 2 ? "isprime" : "notprime";
    let count = 0;
    for(let i = 1; i < num + 1;i++){
    if(num % i === 0){
      count++
    }
  }
  return count === 2 ? true : false
  }
  
  // console.log(prime(3))
  function numPrimorial(n){
    //your code here
    let sum = 1;
    let count = 0;
    let current = 2
    while(count != n){
      if(prime(current)){
        sum *= current
        count += 1
        current +=1 
        console.log(sum, current)
      }else{
        current += 1
      }
  
    }
    return sum
  }
  
  
  
  console.log(numPrimorial(3))