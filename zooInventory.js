function zooInventory(arr){
  var newarr = []
  for(var i = 0; i < arr.length; i++){
    let element = arr[i]
    var newstr = ''
    newstr += element[0]

    let inside = element[1]
    newstr += ' the '
    newstr += inside[0]
    newstr += ' is '
    newstr += inside[1]
    newstr += '.'

    newarr.push(newstr)
      }
  return newarr
}
