Array.prototype.square = function () {
    var arr1 = [];
    this.map(function (obj) {
        arr1.push(obj * obj);
    });
    return arr1;
}
arr = [2, 4, 6, 8, 10];
console.log(arr.square());