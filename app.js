// using prototype to create method on built in stuff
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

//converting string automatically to object
console.log("John".isLengthGreaterThan(3));

//converting number to object is not possible automatically
Number.prototype.isPositive = function() {
    return this > 0;
}

var a = new Number(3);
console.log(a.isPositive());