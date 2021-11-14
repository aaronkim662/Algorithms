const diff1 = (a,b) => {
    if(b.length === 0){
      return a
    }
  
    for(let i = 0; i < b.length; i += 1){
      if(a.includes(b[i]) ){
        let index = a.indexOf(b[i]);
        a.splice(index,1)
        console.log(a)
        return diff1(a,b)
      }else if(!a.includes(b[i]) && b.length > 0){
        b.shift()
        return diff1(a,b)
      }else{
        return a
      }
    }
  }
  
  // diff1([3,3,3,7,3,54,4,4], [3])
  // diff1([1,8,2], [])
  diff1([-7,19,-3,-17,18,-12,-13,20,-3,20,20,-17,-7,2],[-12,20])