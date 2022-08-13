const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your phone number? ", function (answer) {
    const phoneNumber = answer;
    const countryCodeLength = phoneNumber.length - 10;
    
    const components = {
        IDDCC: phoneNumber.substr(0, countryCodeLength), 
        NN: phoneNumber.substr(countryCodeLength, phoneNumber.length)
    };
        
    console.log(components);
  rl.close();
});

