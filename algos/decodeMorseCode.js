decodeMorse = function(morseCode){
    //your code here
    let arrMorse = morseCode.split(' ');
    let converted = '';
    let newArr = [];
    let go = true;
    while(go){
        if(arrMorse[0] === ''){
                arrMorse.shift();
            }else if(arrMorse[arrMorse.length - 1] === ''){
                arrMorse.pop();
            }else{
                go = false;
        }
    }
    for(let i = 0; i < arrMorse.length; i += 1){
      if(arrMorse[i] === '' && arrMorse[i+1] === ''){
        newArr.push(' ')
        i+=1
      }else{
        newArr.push(MORSE_CODE[arrMorse[i]])
      }
    }
    return newArr.join('')
  }