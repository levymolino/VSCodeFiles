// var car = {
// regNumber: "LM0718",
// brand: "Benz",

// displayDetails: function(){
//     console.log(this.regNumber + " " + this.brand);
// }
// }

// car.displayDetails();

// var mycarDetails = car.displayDetails.bind(car);
// mycarDetails();

// var car = {
//     regNumber: "LM0718",
//     brand: "Benz",
    
//     displayDetails: function(ownerName){
//         console.log(ownerName + ", This is your car " + this.regNumber + " " + this.brand);
//     }
//     }
    
//     var mycarDetails = car.displayDetails.bind(car, "Migs");
//     mycarDetails();


    var car = {
        regNumber: "LM0718",
        brand: "Benz",
        
        displayDetails: function(ownerName){
            console.log(ownerName + ", This is your car " + this.regNumber + " " + this.brand);
        }
        }
        
        displayDetails.apply(car, ["Migs"]);
        displayDetails.call(car, ["Migs"]);