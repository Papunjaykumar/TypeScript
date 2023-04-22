var customer = {
    firstName: "Brad",
    lastName: "Pitt",
    sayHi: function () {
        return "Hi buddy";
    }
};
console.log("".concat(customer.firstName, " ").concat(customer.lastName, " and ").concat(customer.sayHi()));
