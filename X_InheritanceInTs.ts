class Shape{
    area:number;
    constructor(area:number){
        this.area=area
    }
}

class Circle extends Shape{
    display():void{
        console.log(`Area of the circle is ${this.area}`)
    }
}

var cobj=new Circle(44)
cobj.display()