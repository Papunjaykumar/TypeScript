//if..else
var num = 12;
if (num % 2 == 0) {
    console.log("The ".concat(num, " is even"));
}
else {
    console.log("The ".concat(num, " is odd"));
}
//if else if
var a = 2;
if (a > 0) {
    console.log("the ".concat(a, " is positive number"));
}
else if (a < 0) {
    console.log("the ".concat(a, " is negative number"));
}
else {
    console.log('the ${a} is neither negative nor positive');
}
var grade = 'A';
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Very Good");
        break;
    default:
        console.log("Very Bad");
        break;
}
