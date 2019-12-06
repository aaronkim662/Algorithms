const compute = (num) => {
  let total = 1
  for(let i = 0; i < num.length;i +=1 ){
      total *= parseInt(num[i])
    }
    return total
}

const persistence = (num) => {
  let count = 0
  let str1 = num.toString().split('')
  while(str1.length > 1){
    str1 = compute(str1).toString()
    count+=1
  }
  return count
}
console.log(persistence(999))
