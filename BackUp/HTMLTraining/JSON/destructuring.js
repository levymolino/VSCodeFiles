// const person = {
//     name: "Migs",
//     age: 22,
//     gender: "male"
// }

// // let name = person.name;
// // let age = person.age;
// // let gender = person.gender;

// // let {name, age, gender} = person;

// let {name: name1, age: age1 , gender: gender1} = person;

// // console.log(name);
// // console.log(age);
// // console.log(gender);

// console.log(name1);
// console.log(age1);
// console.log(gender1);



// // array destructuring

// const arrVal = ["one", "two", "three"];

// const [x, y, z] = arrVal;

// console.log(x);
// console.log(y);
// console.log(z);


// // skip item

// const arrValue = ["one", "two", "three"];

// const [x, , z] = arrValue;

// console.log(x);
// console.log(z);


// const arrValue = ["one", "two", "three", "four"];

// const [x, ...y] = arrValue;

// console.log(x);
// console.log(y);

const person = {
    name: "Migs",
    age: 22,
    hobbies: {
        read: true,
        playGames: true,
    }
}

const {name, hobbies : {read, playGames}} = person;

console.log(name);
console.log(read);
console.log(playGames);