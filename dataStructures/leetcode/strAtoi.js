const strAtoi = (s) => {
  const set = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+'])
  let str = ''
  for(let i = 0; i < s.length; i++){
    if(set.has(s[i])){
      str += s[i]
    }else if(s[i] === ' ' && str === ''){
      continue
    }else{
      break
    }
  }
  // if(str === '') return 0

  let final = parseInt(str)

  if(str === '' || isNaN(final)) return 0
  if(final < 0 && final < -Math.pow(2, 31)) return -Math.pow(2,31)
  if(final > 0 && final > Math.pow(2, 31) - 1) return (Math.pow(2,31) - 1)

  return parseInt(str)

}

// console.log(strAtoi('+-12')) // 0
// console.log(strAtoi('-42')) // 42
// console.log(strAtoi('   +0 123')) // 0
console.log(strAtoi("2147483648")) // 2147483648
// console.log(2147483648 > (Math.pow(2,31) - 1))