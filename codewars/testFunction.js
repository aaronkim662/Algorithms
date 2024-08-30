export const assert = (condition, value, message) => {
  if(condition !== value){
    throw new Error(`Assertion failed: Return should be' ${value} \n    Returned ${condition}`);
  }else{
    console.log('Passes Test')
  }
};

// const math = (x,y) => {
//   return x + y
// }
// assert(math(4,5), 10)