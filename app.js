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
// Use of __proto__ for inheritance (inheriting john object from person)

john.__proto__ = person;

// Calling property by inheritance 

console.log(john.getFullName());

var jane = {
  firstname : 'Jane'  
};

// inheriting jane object from person

jane.__proto__ = person;

console.log(jane.firstname + " " + jane.lastname);