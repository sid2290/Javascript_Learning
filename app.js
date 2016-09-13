var person = {
    firstname : 'sid',
    lastname : 'narang',
    getFullName : function () {
        return this.firstname + " " + this.lastname;
    }
}

var john = {
    firstname : 'John',
    lastname: 'desuza'
}
// Use of __proto__

john.__proto__ = person;

console.log(john.getFullName());