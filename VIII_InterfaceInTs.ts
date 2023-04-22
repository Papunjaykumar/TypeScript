interface IPerson{
    firstName:string
    lastName:string

    sayHi:()=>string // return string
}

var customer : IPerson={
    firstName:"Brad",
    lastName:"Pitt",
    sayHi:()=>{
        return "Hi buddy"
    }
}
console.log(`${customer.firstName} ${customer.lastName} and ${customer.sayHi()}`)