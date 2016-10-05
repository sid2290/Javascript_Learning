// create objects in javascript

function Person(firstname, lastname) {
    
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked');
    
   // return { greeting: 'I got in the way'};
}

//creating prototype for a function
Person.prototype.nationality = "English";
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

//Dangerous aside of new operator
// creating objects in javascript
var john = Person('Sid','Narang');
console.log(john);

//creating another object
var jane = Person('Sudhanshu','Narang');
console.log(jane);
