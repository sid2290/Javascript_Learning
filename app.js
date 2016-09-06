//How argument keyword is use

function car(name,brand,color) {
    console.log(arguments);
    console.log(name);
    console.log(brand);
    console.log(color);
    console.log("-----------------------------");    
}

car();
car("Altima");
car("Altima","Nissan");
car("Altima","Nissan","White");

