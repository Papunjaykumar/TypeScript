//if..else
var num:number=12
if(num%2==0){
    console.log(`The ${num} is even`)
}else{
    console.log(`The ${num} is odd`)
}

//if else if

var a:number=2
if(a>0){
    console.log(`the ${a} is positive number`)
}else if(a<0){
    console.log(`the ${a} is negative number`)
}else{
    console.log('the ${a} is neither negative nor positive')
}

var grade:string='A'

switch(grade){
    case "A":
        console.log("Excellent")
        break;
    case "B":
        console.log(`Very Good`)
        break;
    default:
        console.log("Very Bad")
        break;
    }