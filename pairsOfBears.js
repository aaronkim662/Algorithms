const bears = (num, arr) => {
    let newArr = ''
    for(let i = 0; i < arr.length; i += 1){
      if(arr[i] === '8' && arr[i+1] === 'B' || arr[i] === 'B' && arr[i+1] === '8'){
        newArr = newArr + arr[i] + arr[i+1]
        i += 1
      }
    }
    if(num === 0 && newArr.length === 0){
      return ['', true]
    }
    return (newArr.length/2 > num -1) ? [newArr, true] : [newArr,false]
  }

//   bears(7, 'Be8dBlg8B8mcB88Ba8dB8B88BcB8B')
// , ["B8B8B8",false]);
// bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd')
// , ["8BB8B8B88B",true]);