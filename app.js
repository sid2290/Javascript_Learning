//Hoisting : JS engine move variables and function up but in this code 
// Why a is undefined?
//Calling function and variable move up by JS engine to allocate memory
// in this process functions work good but variables become undefined
// so it is not good idea to rely on hoisting
b();
var a="Hello world";

console.log(a);  



function b() {
    console.log('Called b!');
}

