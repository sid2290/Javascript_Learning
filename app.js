//creating a function
function greet() {
    console.log("Hello");
} ;

//Calling a function
greet();

//creating a function and assigning it to variable
var greeting = function () {
    console.log("Hello again!!");
};

//Variable becomes function and we can invoke it
greeting();

//Now Using IIFE to assign variable a string value rather that function

var iifeGreeting = function() {
    return "hello";
}();

//writing value of variable on console
console.log(iifeGreeting);

// using IIFE stand alone
(function(name) {
    console.log("hello "+ name);
}("Sid"));