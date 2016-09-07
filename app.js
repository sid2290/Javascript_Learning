//creating a function
function Closure() {
    var arr =[];
    for (var i =0 ; i<3; i++){
    arr.push(function () {    
            console.log(i);
    });
    };
    return arr;
} ;

//Calling a function
var outer = Closure();
outer[0]();
outer[1]();

function Closure2() {
    var arr =[];
    for (var i =0 ; i<3; i++){
    arr.push((function (j) {
        return function() {
    console.log(j);
        }
    }(i)));
    };
    return arr;
} ;

//Calling a function
var outer2 = Closure2();
outer2[0]();
outer2[1]();
