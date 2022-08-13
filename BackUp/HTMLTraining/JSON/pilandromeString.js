const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", function (answer) {

    function palindromeFun ()  
    {  
    const arrValue = string.split (''); //   
      
    const reveArrVal = arrValue.reverse();   
       
    const revString = reveArrVal.join('');  
      
    if (string == revString)  
    {  
    console.log('It is a Palindrome string');  
    }  
    else {  
    console.log (' It is not a Palindrome string' );
    }  
    }   
const string =answer;  
console.log(palindromeFun (string));  
rl.close();
});