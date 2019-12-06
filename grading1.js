function gradingStudents(grades) {
    // Write your code here
    let arr = [];
    for( let i = 0; i < grades.length; i++){
        if( grades[i] < 38){
            arr.push(grades[i])
        }else if(grades[i] > 37 && grades[i] < 41){
            arr.push(40)
        }else if(grades[i] % 5 > 2){
            arr.push((5-(grades[i] % 5)) + grades[i])
        }else{
          arr.push(grades[i])
        }
        
    }
    return arr
}

gradingStudents([73,67,38,33])