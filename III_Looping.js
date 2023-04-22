//whihle loop with break statement
var i = 1;
while (i < 10) {
    if (i % 5 == 0) {
        console.log("The first multiple of 5 bewtween 1 and 10 is ".concat(i));
        break;
    }
    i++;
}
//for loop with continue;
var num = 0;
var count = 0;
for (num = 0; num <= 20; num++) {
    if (num % 2 == 0) {
        continue;
    }
    count++;
}
console.log("the count of the odd values between 1 and 20 is ".concat(count));
