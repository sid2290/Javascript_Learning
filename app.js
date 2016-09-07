//creating a function
function greet(name) {
    return function () {
    console.log("Hello " + name);
    }
} ;

//Calling a function
var outer =greet("Sid");
console.log(outer);
outer();
