var arr = ([1, 2, 3, 4, 5, 6, 7]).reduceRight(function(previous, current) {
    previous.push(current);
    return previous;
  }, []);
  
  console.log(arr);