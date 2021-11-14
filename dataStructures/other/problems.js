const dayStart = "07:30";
const dayEnd = "17:45";

const convertMinutes = (strTime) => {
  let newTime = strTime.split(':')
  let numOfMinutes = parseInt(newTime[0]) * 60 + parseInt(newTime[1])
  return numOfMinutes
}

// console.log(convertMinutes(dayStart))

const scheduleMeeting = (start, durationMinutes) => {
  let newDay = convertMinutes(dayStart)
  let newEnd = convertMinutes(dayEnd)
  let newStart = convertMinutes(start)

  if(newStart >= newDay && newStart + durationMinutes <= newEnd){
    console.log(true)
  }else{
    console.log(false)
  }
}

// scheduleMeeting("7:00",15);     // false
// scheduleMeeting("07:15",30);    // false
// scheduleMeeting("7:30",30);     // true
// scheduleMeeting("11:30",60);    // true
// scheduleMeeting("17:00",45);    // true
// scheduleMeeting("17:30",30);    // false
// scheduleMeeting("18:00",15);    // false

const range = (start, end) => {
  let newArr = []
  // console.log(newArr)
  return () => {
    if(newArr.length === 0 && end !== undefined){
      for(let i = start; i <= end; i++){
        newArr.push(i)
      }
    }else if(newArr.length === 0 && end === undefined){
      newArr.push(start)
    }else if(newArr.length > 0){
      for(let i = newArr[0] + 1; i <= start; i++){
        console.log('here')
        newArr.push(i)
      }
    }
    console.log(newArr)
    // return newArr
  }
}
let start = range(3)
start(8)
start()
// range(3,3) // [3]
// range(3,8);    // [3,4,5,6,7,8]
// range(3,0);    // []

// var start3 = range(3);
// var start4 = range(4);

// start3(3);     // [3]
// start3(8);     // [3,4,5,6,7,8]
// start3(0);     // []

// start4(6);     // [4,5,6]
