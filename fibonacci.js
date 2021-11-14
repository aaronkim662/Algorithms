const fib = (num) => {
  let arr = [0,1];
  for(let i = 0; i < num; i += 1){
    let current = arr[i] + arr[i+1];
    arr.push(current);
  }
  console.log(arr)
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
// const fibonacci = (num) => {
//   let arr = [0,1]
//   for(let i = 0;i<num;i++){
//     let current = arr[i] + arr[i+1]
//     arr.push(current)
//   }
//   return arr.slice(0,arr.length-2)
// }
// fib(1)
