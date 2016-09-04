Simple();

function Simple() {
    console.log("Simple function");
}


var anonymousFunction = function(){
    console.log("Anonymous Function");
}

anonymousFunction();

function ArgumentTaking(a) {
    console.log(a);
}

//passing object as argument
ArgumentTaking({greeting: "hello"});

//passing function as argument
ArgumentTaking(function() {console.log("Argument function code")});