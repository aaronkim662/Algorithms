const romanToInt = (str) => {
    const romanObj = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };

    const instances = {
      'IV': 4,
      'IX': 9,
      'XL': 40,
      'XC': 90,
      'CD': 400,
      'CM': 900
    };

    let sum = 0;

    for(let i = 0; i < str.length; i++){
      if(instances[str[i]+str[i+1]] !== undefined){
        sum += instances[str[i]+str[i+1]]
        i += 1
      }else{
        sum += romanObj[str[i]]
      }
    }
    return sum

  }

  console.log(romanToInt('XIV'))