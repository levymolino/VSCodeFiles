let str = 'how to count letters in javascript.'
let letterCount = str.split(/\W/).join('').length

function countWords(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }

  cw = countWords(str);

console.log(`The number of words are ${cw} and the total letter Count ${letterCount}`);