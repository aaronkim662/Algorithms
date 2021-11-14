const prime = (num) => {
  // return num === 1 || num === 2 ? "isprime" : "notprime";
  let count = 0;
  for(let i = 1; i < num + 1;i++){
  if(num % i === 0){
    count++
  }
}
if(count === 2){
  return num
}
//return count === 2 ? num : "notprime"
}

const primeGap = (n,g,p) => {
  let primeArr = [];
  let arr = [];
  for(let i = g; i < p; i += 1){
    if(typeof prime(i) === 'number'){
      primeArr.push(i)
    }
  }
  for(let i =0; i < primeArr.length;i+=1){
    if(primeArr[i+1] - primeArr[i] === n){
      return [primeArr[i],primeArr[i+1]]
      }
    }
    if(primeArr.length === 0){
      return 'nothing'
    }
  }

console.log(prime(6))
console.log(primeGap(2,100,110))
