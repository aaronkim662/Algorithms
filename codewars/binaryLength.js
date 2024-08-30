//input string
//output highest number of straight 1s number
//place strings in array
//iterate through the array
//IF string length at first index is greater than the one at 2nd index
//first indexed string length is the greatest
let string = '00110111111011111'
function binary(str){
  let arr = str.split('0');
  let current = arr[0].length;
  for(let i = 1; i < arr.length;i++){
    let next = arr[i].length;
    (current > next) ? current = current :current = next;
  }
  return current
}
console.log(binary(string))
