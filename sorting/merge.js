const sort = (left,right) => {

  let res = []
  let length = left.length;
  let rLength = right.length;
  let l = 0;
  let r = 0;
  console.log(' left', left,'right', right)
  while(l < left.length && r < right.length){

    //console.log('res', res)
    if(left[l] < right[r]){
      res.push(left[l])
      l++;

    }else{
      res.push(right[r])
      r++;

    }
  }
  console.log('array', res)
  return res.concat(left.slice(l)).concat(right.slice(r))
}
const merge = (arr) => {
  if(arr.length < 2){
    return arr
  }
  let middle = Math.floor(arr.length/2);
  let left = arr.slice(0,middle);
  let right = arr.slice(middle);
  //console.log('left', left,'right', right)

  return sort(merge(left),merge(right))
}
// let arr = [1,4,6,3,9,11,4,20,75,9,-5,12]

// console.log(merge([1,4,6,3,9,11,4,20,75,9,-5,12]))
console.log(merge([1,4,3,2]))
