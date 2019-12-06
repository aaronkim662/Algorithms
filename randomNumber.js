const randomNumber = (n) => {
  var arr = []
  while(arr.length < n){
    var r = Math.floor(Math.random()*n) ;
      if(arr.indexOf(r) === -1)
      arr.push(r);
}
return arr
}
console.log(randomNumber(5))
