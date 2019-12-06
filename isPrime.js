const prime = (num) => {
  return num === 1 || num === 2 ? "isprime" : "notprime";
  const count = 0;
  for(let i = 1; i < num + 1;i++){
  if(num % i === 0){
    count++
  }
}
return count === 2 ? num : false
//return count === 2 ? num : "notprime"
}
isPrime(2)
