// given an object within an array and an array of names
// return the array's elements associating object key
// if the element does not exist in the object reutrn not found
// name=phonenumber
// iterate through the array that contains the names and check if its included in the array of object
let number = [{'sam': 123}, {'tom': 321},{'harry':213}];
let names = ['sam', 'david', 'harry'];

const phone = (obj, arr) => {
  let array = [];
  for(let i = 0; i < obj.length; i+=1){
      arr.indexOf(Object.keys(number[i])[0]) > -1 ? array.push(Object.keys(number[i])[0]+'='+Object.values(number[i])[0]) : array.push('NOT FOUND')
  }
  return array
}
const phone = (obj, arr) => {
  for(let i = 0; i < obj.length; i+=1){
      arr.indexOf(Object.keys(number[i])[0]) > -1 ? console.log(Object.keys(number[i])[0]+'='+Object.values(number[i])[0]) : console.log('NOT FOUND')
  }
}
phone(number,names)
const phone = (obj, arr) => {
      obj.forEach((ele,i) => arr.indexOf(Object.keys(obj[i])[0]) > -1 ? console.log(Object.keys(obj[i])[0]+'='+Object.values(obj[i])[0]) : console.log('NOT FOUND'));
  }

phone(number,names)
