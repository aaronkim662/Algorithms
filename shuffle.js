function shuffle(arr){
  const num = arr.length;
  const newArr = [];
  while(newArr.length !== num){
    let rand = Math.floor(Math.random()*arr.length);
    let take = arr.splice(rand,1)[0];
    newArr.push(take);
  }
  return newArr
}
arr = ['a','b','c','d']
console.log(shuffle(arr))
