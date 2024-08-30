const arrayIt = (str) => {
  let arr = [];
  let go = true
  while(go){
  for(let i = 0; i < str.length; i+= 1){
    if(str[i] === '+' || str[i] === '-' || str[i] === '*' || str[i] === '/' ||  (str[i] === '(') ||str[i] === ')'){
      let newStr = str.substring(0,i)
      if(newStr !== ''){
      arr.push(newStr)
      }
      str = str.replace(str.substring(0,i), '')

      if(str.substring(0,1) !== ''){
      arr.push(str.substring(0,1))
      }
      str = str.replace(str.substring(0,1),'')
      i = -1
      }
    }
    if(!str.includes('+') && !str.includes('-') && !str.includes('*')&& !str.includes('/') && !str.includes('(') && !str.includes(')')){
      go = false;
      arr.push(str)
    }
  }
  if(arr[arr.length - 1] === ''){
    arr.pop()
  }
    return arr
}