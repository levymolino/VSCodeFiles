function foo(a, b, c) {
    for (var i=0;i<arguments.length;i++) {
        console.log(arguments[i]);
    }
}

console.log(foo.length);