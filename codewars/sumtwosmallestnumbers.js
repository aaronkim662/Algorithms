function sumTwoSmallestNumbers(numbers) {
  var numbers = numbers.sort(function(a, b){return a - b})
  return numbers[0] + numbers[1]  
};
sumTwoSmallestNumbers([15, 28, 4, 2, 43])
