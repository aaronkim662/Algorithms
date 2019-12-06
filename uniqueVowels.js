// Given an array of strings
// loop through array
// check each string if it includes a vowels
// if it does return that string in an array


const hasVowels = (arr) => {
  let newArr = [];
  arr.forEach(ele => {
    checkVowels(ele) ? newArr.push(ele) : '';
  });
  return newArr
}
console.log(hasVowels(['jon', 'ada', 'ppzpp', 'brgggg', 'eric']))
