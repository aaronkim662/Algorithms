function trans(str){
  let pol = {
    'a' : 't',
    'c' : 'g',
    'g' : 'c',
    't' : 'a'
  }
  let arr = []
  str.toLowerCase().split('').forEach(function(element) {
    arr.push(pol[element])
  })
  return arr.join('')
}
console.log(trans("ATTGC" ))
