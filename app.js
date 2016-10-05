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

// creating objects in javascript
var john = new Person('Sid','Narang');
console.log(john.getFullName());

//creating another object
var jane = new Person('Sudhanshu','Narang');
console.log(jane.nationality);
