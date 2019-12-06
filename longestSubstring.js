const high = (a,b) => {
  return a > b ? a : b
}
const longest = (str) => {
  let highest = 0;
  for( let i = 0; i < str.length;i += 1){
    let string = str[i]
    for( let j = 1; j < str.length;j += 1){
      (!string.includes(str[j])) ? string+=str[j] : highest = high(highest,string.length);
    }
  }
  return highest
}
console.log(longest('abcdefghia'))

const longest = (str) => {
  let count = 1;
  let highest = 1;
  let string = ''
  for(let i = 0; i < str.length;i+=1){
    string+=str[i]
    for(let j = 1;j<str.length;j+=1){
      if(!string.includes(str[j])){
        string+=str[j]
        count+=1
        highest = high(highest,count)
      }
    }
  }
  return highest
}
