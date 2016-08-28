
 // single thread: one command is executed on time
// synchronous: one line at a time in order

function b() {
    var myVar; // Finally this is of myVar as undefined 
    console.log(myVar);
    
}

function a () {
    var myVar= 2; // Second this myVar is of excution context a()
    b();
    console.log(myVar);
    
    
}

var myVar = 1; // First this seperate myVar of Global execution context 
a();
console.log(myVar);
