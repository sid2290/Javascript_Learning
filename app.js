//creating a function
function Add(callback) {
  var a = 10;
    var b= 20;
    var c= a+b;
    console.log(c);
    callback();
} ;

Add(function () {console.log("Adding is finished")});

