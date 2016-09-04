// Using this keyword 
//Trying to use "this" keyword in the context of simple function

Simple();

function Simple() {
    console.log(this);
    this.something="Hello";
    console.log(something);
}


var anonymousFunction = function(){
    console.log(this);
}

anonymousFunction();


//Showing that something variable is undefined for the context of Simple function
console.log(Simple.something);

//but, "this" keyword is pointing to the global window object
console.log(window.something);


function OtherSimple () {
    console.this(this);
    
   }; 

var JS = {
    name: 'The JavaScript Object',
    log: function () {
        this.name="updated name";
        console.log(this);
        var setname = function(newname) {
            this.name=newname;
            console.log(this);
        };
        setname("update again!!");
        console.log(this);
    }
}

JS.log();

OtherSimple.othersomething = {
    name: 'Function in Function',
    log: function () {
        console.log(this);
    }
}

OtherSimple.othersomething.log();

