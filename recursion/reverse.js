function reverse(string, rev = ''){

  if(string === '') { return rev }
  rev = rev + string[string.length-1];
  string = string.slice(0,-1);
  return reverse(string,rev)
}
console.log(reverse('hello'))
//reverse('hello', '')
