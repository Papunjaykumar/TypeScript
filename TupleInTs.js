var mycol = [121, "Hello world"];
console.log("value of mycol int is ".concat(mycol[0]));
mycol[0] = 122;
console.log("value of mycol int is ".concat(mycol[0]));
mycol.push(50000);
console.log(mycol.length);
mycol.pop();
console.log(mycol.length);
