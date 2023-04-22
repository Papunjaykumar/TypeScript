class Car{
    engine:string
    constructor(engine:string){
        this.engine=engine
    }

    showDetail():void{
        console.log(`The car engine model is ${this.engine}`)
    }
}

var carobj=new Car("BMW XYZ 101")
carobj.showDetail()