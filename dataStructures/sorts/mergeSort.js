// [5,6,3,4,8,9,1,2]
// recursive algorithm
// calls on itself on smaller arrays
// take input array, cut it in half
// [5,4,1,8,7,2,6,3]
// [5,4,1,8] [7,2,6,3]
// recursive calls//
// [1,4,5,8] [2,3,6,7]
// merge //
// C = output array [length = n]
// A = 1st sorted array [n/2]
// B= 2nd sorted array [n/2]
// [A] [B]
//  i   j // i = 1 // j =1
// for k = 1 to n
// if A[i] < B[j]
//  C[k] = A[i]
//  i++
// else if B[j] < A[i]
//  C[k] = B[j]
//  j++
//
const { performance } = require('perf_hooks')
const startTime = performance.now()
const sort = (arr1, arr2) => {
  let left = 0
  let right = 0
  let result = []
  // console.log(arr1,arr2)

  while(left < arr1.length && right < arr2.length){
    if(arr1[left] < arr2[right]){
      result.push(arr1[left])

      left++
    }else {
      result.push(arr2[right])
      right++
    }
  }

  while(left < arr1.length){
    result.push(arr1[left])
    left++
  }

  while(right < arr2.length){
    result.push(arr2[right])
    right++
  }

  return result

}

const mergeSort = (arr) => {

  if(arr.length < 2) return arr
  let middle = Math.floor(arr.length/2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return sort(mergeSort(left, count), mergeSort(right, count), count)
}
// const endTime = performance.now()
// console.log(mergeSort([2,1]))
// console.log(mergeSort([5,6,3,4,8,9,1,2,3,11]))
console.log(mergeSort([1,3,2,5,4,6]))
// console.log(endTime - startTime)
