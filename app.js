var person = {
    firstname:"Sid",
    lastname:"Narang",
    log: function () {
        console.log(this.firstname + " " + this.lastname);
    }
}

person.log();

var log1 = (function(arg1,arg2) {
    console.log(this.firstname);
    
}).bind(person);
log1();

var log2 = (function(arg1,arg2) {
    console.log(this.firstname+ " " + arg1 + " " + arg2);
    
}).call(person,1,2);


var log3 = (function(arg1,arg2) {
    console.log(this.firstname+ " " + arg1 + " " + arg2);
    
}).apply(person,[1,2]);





