/*
functional with optional parameter

*/
console.log(`Optional parameter`)

function display_detail(empid:number,empname:string,empmailid ?:string){
    console.log(`Employee id ${empid}\n Employee Name : ${empname}`)
    if(empmailid!=undefined){
        console.log(`Employee Mail Id : ${empmailid}`)
    }
}

display_detail(123,"Sakshi","Sakshi@gmail.com")
display_detail(123,"Papunjay")


console.log(`Function with Rest parameter equivalent to the Var Num Args In java`)

function addNumber(...nums:number[]){
    var i:number;
    var sum:number=0;

    for(i=0;i<nums.length;i++){
            sum=sum+nums[i];
    }
    console.log(`The summation of array element is ${sum}`)
}

addNumber(1,2,3,4);
addNumber(1,2,3,4,5,6,7,8,9,10)

console.log(`Function with default parameter `)

function discount_calculate(price:number,rate:number=0.50){
    var dis=price*rate;
    console.log(`Discounted amount : ${dis}`)
}

discount_calculate(1000);
discount_calculate(1000,10);

//Note: A parameter connot be declared  optional or default  at the same time;


console.log("Anonymous function")
//Anonymous function are not bound to any identifier  i.e., function with no name
//dynamically declare at run time can accept inputr and return output


var msg=function():string{
    return "Hi from Anonymous Function";
}
console.log(msg())

var result = function(a:number,b:number){
    return a+b;
}
console.log(result(7,8))

console.log(`Function constructor`)
//Typescript also support defining of function with built in javascript constructor call function()

var myFuntion=new Function("a","b","return a*b")

var x=myFuntion(2,3);
console.log(`${x}`)

console.log(`Recursion In TypeScript`)
function factorial(number){
    if(number<=0){ //Terminating case
        return 1
    }else{
        return (number*factorial(number-1))
    }
}

console.log(factorial(5))

console.log(`Lambda Function In Type Script`)
//Lambda Function is the concise way of writing Annonymous function

var a=(x:number)=>{
    x=10+x;
    console.log(x)
}

//Lambda Function With type inference

var q=(x)=>{
    if(typeof x=="number"){
        console.log(`${x} number datatype`)
    }else if(typeof x=="string"){
        console.log(`${x} is of string data type`)
    }
}

q(11)
q("sunny")

console.log("Lambda with single parameter without parenthesys")
var disp=x=>{
    console.log(`The function got x as an input with value ${x}`)
}
disp(x)

console.log(`function Overloading`)

function disp_overloading(s1:string):void;
function disp_overloading(n1:number,s1:string):void;

function disp_overloading(x:any,y?:any):void{
    console.log(`${x}\n${y}`)
}

disp_overloading("abc")
disp_overloading(11,"xyz")