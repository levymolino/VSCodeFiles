const arrOfStr = ['one', 'two', 'three'];

function multi(arr) {
    var newarr = [];
 for (var i = 0; i < arr.length; i++) {
     newarr.push( arr[i].length);
 }
 return newarr;
}

console.log(multi(arrOfStr));