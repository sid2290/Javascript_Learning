//Hoisting : JS engine move variables and function up but in this code 
// Why a is undefined?
//Calling function and variable move up by JS engine to allocate memory
// in this process functions work good but variables become undefined
// so it is not good idea to rely on hoisting


// remove comments to see the Javascript undefined property, always rememeber that if you forgot
// to define variable js will automatically give it a value of undefined

var a;
//var a = "hello";

if(a===undefined){
    console.log('a is undefined');
}
else {
    console.log('a is defined')
}

function b() {
    console.log('Called b!');
}

b();

console.log(a);  // here a is undefined because this value is give to it before execution

var a = "hello";

console.log(a); // here a is undefined because this value is give to it during execution
