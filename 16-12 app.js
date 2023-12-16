const sarray=[
{name :"sahir",
city:"khi",
score:60,
stauts:"pass"
},

{name :"shahid",
city:"khi",
score:20,
stauts:"fail"
},

{name :"sahir",
city:"khi",
score:70,
stauts:"pass"
}


]                     

numarr=[1,2,3,4,5,6,7,8,9]

const check_even=numarr.filter((e)=>e%2!==0)

console.log(check_even)



const check_status=sarray.filter((e)=>e.stauts ==="pass")

console.log(check_status)



const check_score=sarray.filter((e)=>{
    if (e.score <60){
    return "45"
}

})

console.log(check_score)


function clf(){

val=1


function cclf(){

val +=1
console.log(val)
}
// console.log("p: "+val)
return cclf

}

//calling two functs simulataneously
var vvv =clf()()


// value addition
const vvvt =clf()

vvvt()
vvvt()
vvvt()
// console.log(vvvt)
// console.log(vvvt)
