var moment = require('moment');

const randomDate = (start, end) => {
    if(!end) { end = moment().format('MM/DD/YYYY')}
    
    start = moment(start)
    let diffDays = moment(end).diff(start, 'days')
    let randomDay = Math.ceil(Math.random() * diffDays )
    let randomDate =  moment(start).add(randomDay, 'days').format('YYYY-MM-DD')
    return randomDate
}

console.log(randomDate('1900-01-01', '2000-01-01'))
// returns a random day between two dates
