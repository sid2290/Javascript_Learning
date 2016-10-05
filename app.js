// create objects in javascript

function Person(firstname, lastname) {
    
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked');
    
   // return { greeting: 'I got in the way'};
}

// creating objects in javascript
var john = new Person("Sid","Narang");

console.log(john);

//creating other object
var jane = new Person('Sudhanshu','Narang');

console.log(jane);
