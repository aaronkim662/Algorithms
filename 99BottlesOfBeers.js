const song = (num) => {
  var array = []
  for(var i = 99;i >2;i--){
    array.push(i + " bottles of beer on the wall, " +i+ " bottles of beer.")
    array.push("Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.")
  }
  array.push("2 bottles of beer on the wall, 2 bottles of beer.")
  array.push("Take one down and pass it around, 1 bottle of beer on the wall.")
  array.push(i + " bottles of beer on the wall, " +i+ " bottle of beer.")
  array.push("Take one down and pass it around, no more bottles of beer on the wall.")
  array.push("No more bottles of beer on the wall, no more bottles of beer.")
  array.push("Go to the store and buy some more, 99 bottles of beer on the wall.")
  return array[num]

}
song(2)
