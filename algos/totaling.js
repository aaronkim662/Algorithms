  let str2 = '97+8-8+(7.9+5)+5'

const total = (arr) => {
  let operations = ['*', '/', '+', '-'];
  let go = true;
  while(go){
    for(let i = 0; i < arr.length; i += 1){
      if(arr[i] === operations[0]){
        const multiply = parseInt(arr[i-1]) * parseInt(arr[i+1]);
        const split = arr.splice(i-1,3);
        arr.splice(i-1,0,multiply);
        i = 0;
      }else if(arr[i] === operations[1]){
        const divide = parseFloat(parseInt(arr[i-1]) / parseInt(arr[i+1]));
        const split = arr.splice(i-1,3);
        arr.splice(i-1,0,divide);
        i = 0;
      }
    }
    if(!arr.includes(operations[0]) && !arr.includes(operations[1])){
      go = false;
      operations.shift();
      operations.shift();
    }
  }
    let run = true;
    while(run){
    for(let i = 0; i < arr.length; i += 1){
      if(arr[i] === operations[0]){
        const add = parseFloat(parseInt(arr[i-1]) + parseInt(arr[i+1]));
        const split = arr.splice(i-1,3);
        arr.splice(i-1,0,add);
        i = 0;
      }else if(arr[i] === operations[1]){
        const subtract = parseFloat(parseInt(arr[i-1]) - parseInt(arr[i+1]));
        const split = arr.splice(i-1,3);
        arr.splice(i-1,0, subtract);
        i = 0;
      }
    }
    if(!arr.includes(operations[0]) && !arr.includes(operations[1])){
      run = false;
      operations.shift();
      operations.shift();
    }
  }
  return arr;
}