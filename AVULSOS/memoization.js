var minhafunção = function() {
    return 'hello';
};
minhafunção.foo = 'bar';
console.log(minhafunção());
console.log(minhafunção.foo);
    

var fatorial = function(n) {
    if(n === 0) {
        return 1;
    }
    return n*fatorial(n-1)
};
console.log(fatorial(0));
console.log(fatorial(1));
console.log(fatorial(2));
console.log(fatorial(3));



var fatorial = function(n){
    if(fatorial[n]){
      return fatorial[n];
    }
    if(n===0){
      return 1;
    }
    fatorial[n] = n*fatorial(n-1);
    return fatorial[n];
  };
  console.log(fatorial(0));
  console.log(fatorial(1));
  console.log(fatorial(2));
  console.log(fatorial(3));
  


