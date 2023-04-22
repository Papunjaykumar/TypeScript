console.log(`Array  creation type script`)
var empname:string[]=new Array("Sunny","Vicky","Pratham","Saransh")

for(var i=0;i<empname.length;i++){
    console.log(empname[i])
}

console.log(`Array Destructuring In TypeScript`)

var empids:number[]=[111,113]
var [p,s]=empids
console.log(`${p}  ${s}`)

console.log(`Array For Each Method For iteration`)
let nums=[1,2,3,4,5,6,7]
nums.forEach((i)=>{
    console.log(i)
});

console.log(`Passing array to afunction and returning array from a function`)

function display_emp_name(array:string[]){
    for(var i=0;i<array.length;i++){
        console.log(array[i])
    }
}
display_emp_name(empname)

console.log(`REturning an array from function`)


function display():string[]{
    return new Array("John","Mack")
}

var ename=display();
//Accessing array element using for in

for(var z of ename){
    console.log(z)
}

for(var w in ename){
    console.log(w)
}