// creating an object

var person = new Object();

// Creating object properties
person ["firstname"] = "Sudhanshu";
person ["lastname"]  = "Nanarg";

// Assigning variable to name of property
var firstNameProperty = "firstname";

console.log(person);
//one way to call property of object
console.log(person[firstNameProperty]);

// Use of dot operator call property on object
console.log(person.firstname);

person.address = new Object();

person.address.street = "vanier st.";
person.address.city ="Montreal";
person.address.state="QC";

console.log(person.address);
console.log(person.address.city);

person.address.Details =new Object();
person.address.Details.married = "No";
person.address.Details.phonenumber ="xxxxxxxx803";

console.log(person.address.Details);
console.log(person.address.Details.married)

// or Instead of using new operators you can use object literals

var literalPerson = {
    Firstname:'Sudhanshu',
    Lastname:'Narang',
    address: {
        street: "vanier st.",
        city:"Montreal"
    }
}

console.log(literalPerson);
console.log(literalPerson.Firstname);

//passing objects in functions
function greet(person) {
    console.log("hello " + person.flyObjectfirstName);
};

greet(literalPerson);

// creating objects on the fly

greet({
    flyObjectfirstName: 'Sid',
    flyObjectlastName:'Narang'
});