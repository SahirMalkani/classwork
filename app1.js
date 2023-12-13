let student_info = {
    name : "anas",
    class :8 ,
    city :"karchi"
}

let student_marks = {
    score : "90" ,
    grade : ""

    
}

let student_result = {
    ...student_info,
    ...student_marks,
    status : "",
    pcnt:""
}


// let { student_info : student_marks1 } = student_result


var {score}=student_result

console.log(student_result)


student_result.grade = score >=90 && score <=100 ? "A+" : "F"




console.log(student_result)


var sahir = (score1) => {
    
    
    return score1 >80  ? "pass" : "fail"
}


var sahirp = (score1) => {
    
    
    return score1/100*100
}



var ggrade = sahir(60)


var ppcnt = sahirp(55)


console.log(ggrade)


student_result.status=ggrade

student_result.pcnt=ppcnt

console.log(student_result)



let studestdarray = [{
    name : "anas",
    class :8 ,
    city :"karchi"
}

,{
    score : "90" ,
    grade : ""

    
},

{
    ...student_info,
    ...student_marks,
    status : "",
    pcnt:""
}
]

