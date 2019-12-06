 const string = '12:05:39AM'

const time = (str) => {
  if(str === '12:00:00AM'){
    return '00:00:00'
  }else if(str === '12:00:00PM'){
    return '12:00:00'
  }
  const newStr = str.split(':')
  if(parseInt(newStr[0]) === 12 && newStr[2][2] === 'P'){
    return newStr.join(':').slice(0,8)
  }

  if(parseInt(newStr[0]) === 12 && newStr[2][2] === 'A'){
    newStr[0] = '00'
    return newStr.join(':').slice(0,8)
  }

  if(newStr[2][2] === 'P' ){
    newStr[0] = (parseInt(newStr[0]) + 12).toString()
  }else{
    newStr[0] = newStr[0] 
  }

  if(newStr[0] > 23){
    newStr[0] = '0' + (parseInt(newStr[0]) - 24).toString()
  }
  return newStr.join(':').slice(0,8)
}

console.log(time(string))