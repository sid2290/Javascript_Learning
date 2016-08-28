
 // single thread: one command is executed on time
// synchronous: one line at a time in order

function b() { 
    console.log(myVar); // powerful concept of looking in outer enviroment (which is generally where code is sitting physically) 
                        // But javscript keep on looking at it till global execution level untill it will find it
}

function a () {
    
    function c () {
        console.log(myVar);
    }
    
    var myVar= 2; // Second this myVar is of excution context a()
    b();
    c();
   // console.log(myVar);
    
    
}

var myVar = 1; // First this seperate myVar of Global execution context 
a();
//console.log(myVar);
