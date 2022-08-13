// function myFun(a, b, ...manyMoreArgs){
//     console.log("a", a);
//     console.log("b", b);
//     console.log("manyMoreArgs", manyMoreArgs);
// }
// myFun("one", "two", "three", "four", "five", "six");

// function fun1(...theArgs){
//     console.log(theArgs.length)
// }

// fun1()
// fun1(5)
// fun1(5, 6, 7)

// function fun1(){
//     console.log(arguments)
// }

// fun1(1, 2, 3, 4, 5, 6, 7);

// var arr = [
//     'first item',
//     'second item is longer than the third one',
//     'third longish item'
//   ];
  
//   var lgth = 0;
//   var longest;
  
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].length > lgth) {
//       var lgth = arr[i].length;
//       longest = arr[i];
//     }
//   }
  
//   console.log(longest);

const getLongestText = (arr) => arr.reduce(
    (savedText, text) => (text.length > savedText.length ? text : savedText),
    '',
  );
  
  console.log(getLongestText(['word', 'even-longer-word', 'long-word']))