//creating a Type  Template

var person={
    fname:"Sunny",
    lname:"Trivedi",
    sayHi:function(){}
}//Type Template

//consuming Type Template
person.sayHi=function(){
    console.log("Hi From "+person.fname)
}
person.sayHi();

/* A TypeScript object is an instance which contain set of key value pairs*/

var invokeperson=function(obj:{fname:string,lname:string}){
    console.log(obj.fname)
    console.log(obj.lname)
}
invokeperson(person)