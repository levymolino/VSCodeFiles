// 'use strict'

// function printThis() {
//     console.log(this)
// }

// printThis()

// const india = {
//     name: 'The country India',
//     independence: 1947,

//     details: {
//         flag: 'tricolored',
//         currency: 'INR',

//         printDetails(){
//             console.log(`the flag is ${this.flag} and the currency is ${this.currency}`)
//         }
//     }

//     // describe(){
//     //     console.log(`${this.name} got its independence on ${this.independence}`)
//     // }
// }

// india.details.printDetails()

// // india.describe()

// function Country(name, independenceOn){
//     this.name = name
//     this.independenceOn = independenceOn

//     this.describe = function(){
//         console.log(`the flag is ${this.name} and the currency is ${this.independenceOn}`)
//     }
// }

// const india = new Country('The country India', 1947)

// india.describe()

// class Country{
//     constructor(name, independenceOn)
//     {
//     this.name = name
//     this.independenceOn = independenceOn    
//     }

//     describe() {
//         console.log(`the flag is ${this.name} and the currency is ${this.independenceOn}`)
//     }
// }

// const india = new Country('The country India', 1947)

// india.describe()

const myNameis = {
    names: "Miguele Villar",

    regularFunction: function(){
        console.log(this.names)
    },

    arrowFunction: () => {
        console.log(this.names)
    }
}

myNameis.regularFunction()
myNameis.arrowFunction()