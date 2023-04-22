/*
functional with optional parameter

*/
console.log("Optional parameter");
function display_detail(empid, empname, empmailid) {
    console.log("Employee id ".concat(empid, "\n Employee Name : ").concat(empname));
    if (empmailid != undefined) {
        console.log("Employee Mail Id : ".concat(empmailid));
    }
}
display_detail(123, "Sakshi", "Sakshi@gmail.com");
display_detail(123, "Papunjay");
console.log("Function with Rest parameter equivalent to the Var Num Args In java");
function addNumber() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("The summation of array element is ".concat(sum));
}
addNumber(1, 2, 3, 4);
addNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("Function with default parameter ");
function discount_calculate(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var dis = price * rate;
    console.log("Discounted amount : ".concat(dis));
}
discount_calculate(1000);
discount_calculate(1000, 10);
//Note: A parameter connot be declared  optional or default  at the same time;
console.log("Anonymous function");
//Anonymous function are not bound to any identifier  i.e., function with no name
//dynamically declare at run time can accept inputr and return output
var msg = function () {
    return "Hi from Anonymous Function";
};
console.log(msg());
var result = function (a, b) {
    return a + b;
};
console.log(result(7, 8));
console.log("Function constructor");
//Typescript also support defining of function with built in javascript constructor call function()
var myFuntion = new Function("a", "b", "return a*b");
var x = myFuntion(2, 3);
console.log("".concat(x));
console.log("Recursion In TypeScript");
function factorial(number) {
    if (number <= 0) { //Terminating case
        return 1;
    }
    else {
        return (number * factorial(number - 1));
    }
}
console.log(factorial(5));
console.log("Lambda Function In Type Script");
//Lambda Function is the concise way of writing Annonymous function
var a = function (x) {
    x = 10 + x;
    console.log(x);
};
//Lambda Function With type inference
var q = function (x) {
    if (typeof x == "number") {
        console.log("".concat(x, " number datatype"));
    }
    else if (typeof x == "string") {
        console.log("".concat(x, " is of string data type"));
    }
};
q(11);
q("sunny");
console.log("Lambda with single parameter without parenthesys");
var disp = function (x) {
    console.log("The function got x as an input with value ".concat(x));
};
disp(x);
console.log("function Overloading");
function disp_overloading(x, y) {
    console.log("".concat(x, "\n").concat(y));
}
disp_overloading("abc");
disp_overloading(11, "xyz");
