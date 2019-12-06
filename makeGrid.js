function makeGrid(numc,numr){
  var newarr = []
  for(var i = 0;i < numr;i++){
    var temparr = []
    for(var j =0;j < numc;j++){
      temparr.push(j + 1)
    }
    newarr.push(temparr)
  }
  return newarr
}
