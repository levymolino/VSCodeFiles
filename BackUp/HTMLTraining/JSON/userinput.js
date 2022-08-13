const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", function (answer) {
     let str1 = answer;
     let str1WordArr = str1.split(" ");   
      let reverseWord=[];
     for(let i=(str1WordArr.length)-1;i>=0;i--)
     {
          reverseWord.push(str1WordArr[i]); 
     }
      console.log(reverseWord.join(" ")); 
  rl.close();
});