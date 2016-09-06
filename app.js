// Javascript array

var arr = [
           1,
           false,
           {
               Car:"Altima",
               Brand:"Nissan"
           },
            function start() {
                console.log("Car Started");
            },
            "Awesome"
          ];
console.log(arr);
// calling function from the array
arr[3]();
// using object inside the array
console.log(arr[2].Car);