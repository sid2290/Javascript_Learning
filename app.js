function PassFirstClassFunctions(arr,fn) {
    
    var arr2 = [] ;
    
    for(var i=0;i<arr.length;i++) {
         arr2[i] = fn(arr[i]);
    }
    
    return arr2;
}

var array_1 = [1,2,3];

var array_2 = PassFirstClassFunctions(array_1,function (x) {
    return x *2;
})

var array_3 = PassFirstClassFunctions(array_1,function (x) {
    return x *3;
})
console.log(array_2 );
console.log(array_3 );

var checkLimit = function (x,limit) {
    return x < limit;
}

var array_4 = PassFirstClassFunctions(array_1,checkLimit.bind(this,1));
console.log(array_4 );

//using underscore library
var array_5 = _.map(array_1,function(x) {return x*3});

console.log(array_5);

