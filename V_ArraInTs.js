console.log("Array  creation type script");
var empname = new Array("Sunny", "Vicky", "Pratham", "Saransh");
for (var i = 0; i < empname.length; i++) {
    console.log(empname[i]);
}
console.log("Array Destructuring In TypeScript");
var empids = [111, 113];
var p = empids[0], s = empids[1];
console.log("".concat(p, "  ").concat(s));
console.log("Array For Each Method For iteration");
var nums = [1, 2, 3, 4, 5, 6, 7];
nums.forEach(function (i) {
    console.log(i);
});
console.log("Passing array to afunction and returning array from a function");
function display_emp_name(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
display_emp_name(empname);
console.log("REturning an array from function");
function display() {
    return new Array("John", "Mack");
}
var ename = display();
//Accessing array element using for in
for (var _i = 0, ename_1 = ename; _i < ename_1.length; _i++) {
    var z = ename_1[_i];
    console.log(z);
}
for (var w in ename) {
    console.log(w);
}
