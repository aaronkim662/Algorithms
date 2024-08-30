function myIndexOf(str1,str2,num){
  if(num === undefined){
    num = 0
  }
  for(var i = num;i<str1.length;i++){
    if(str1.slice(i,i+str2.length) === str2){
      return i
    }


  }
  return -1
}
