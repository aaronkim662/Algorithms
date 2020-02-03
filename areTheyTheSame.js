function comp(array1, array2){
    //your code here
    if(array1 === [] || array2 === []){
      return false
    }
    if(array1 === null || array2 === null){
      return false
    }
    array1 = array1.sort(function(a,b) {return a-b})
    array2 = array2.sort(function(a,b) {return a-b})
    console.log(array1, array2)
    for(let i = 0; i < array1.length; i += 1){
      if(array1[i] !== Math.sqrt(array2[i])){
        return false
      }
    }
    return true
    
  }

// a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];