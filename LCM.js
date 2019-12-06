const lcm = (n,n1) => {
  let most = 0
  let least = 0
  if(n > n1){
    most = n
    least = n1
  }else{
    most = n1
    least = n
  }
  let count = most
  let going = true
  while(going){
    if(count % least === 0){
    going = false


    }else{
      count +=most
    }
  }
  return count


}
console.log(lcm(32,24))
