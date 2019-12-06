function flatten(arr){
  let newarr = [];
  for(let i = 0; i< arr.length;i += 1){
    if(Array.isArray(arr[i])){
      for(let j = 0; j < arr[i].length; j += 1){
        newarr.push(arr[i][j])
      }

    }else{
      newarr.push(arr[i])
    }
  }
  return newarr
}

function arrayFlattener(arr, newarr= []){
  for(let i = 0; i < arr.length; i += 1) {
    if(Array.isArray(arr[i]) ){
      arrayFlattener(arr[i], newarr)
    }else{
      newarr.push(arr[i])
    }
  }
  return newarr
}
let arr = [1,[2,3],[[4], 5]]

console.log(arrayFlattener(arr))

// Given an array containing arrays
// ITERATE through array checking IF the element at that index is an array
// IF it is not an array push the element to an empty array
// IF it is recursively call the function passing the element and the empty array
// return a single array containing only numbers
