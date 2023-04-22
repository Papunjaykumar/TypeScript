var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.showDetail = function () {
        console.log("The car engine model is ".concat(this.engine));
    };
    return Car;
}());
var carobj = new Car("BMW XYZ 101");
console.log(carobj.showDetail());
