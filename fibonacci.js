const fib = (num) => {
  let arr = [0,1];
  for(let i = 0; i < num; i += 1){
    let current = arr[i] + arr[i+1];
    arr.push(current);
  }
  return arr
}
fib(10) // adds n numbers
/* //returns from 0 to nth index
const fib = (num) => {
  let arr = [0,1]
  for(let i = 0;i<num;i++){
    let current = arr[i] + arr[i+1]
    arr.push(current)
  }
  return arr.slice(0,arr.length-2)
}
fib(1)
*/
const fibonacci = (num) => {
  let arr = [0,1]
  for(let i = 0;i<num;i++){
    let current = arr[i] + arr[i+1]
    arr.push(current)
  }
  return arr.slice(0,arr.length-2)
}
fib(1)

let arr = [1,1]

function fibonacci(n){

  if(n === 0){
    return arr
  }
  if(n > 2) {
    total = arr[arr.length-1] + arr[arr.length-2]
    arr.push(total)
 }
 return fibonacci(n-1)
}

for(let i = 3; i < 5; i++){

    let fib1 = fibonacci(i-1)
    let fib2 = fibonacci(i)

    console.log(fib1, fib2 , i)
    }
