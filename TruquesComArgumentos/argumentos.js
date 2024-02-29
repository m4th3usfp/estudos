    // truque com argumentos
    var minhafunção = function(a) {
        console.log(arguments[a]);
        console.log(a);
        console.log(arguments[1]);
        console.log(arguments[2]);
    };
    
    minhafunção('foo','bar','sex');
    
    function outrafunção() {
        var argumentsArray = Array.prototype.slice.call(arguments)
    };
    
    
    function foo() {
        console.log(arguments.callee.caller.name);
    }
    function bar() {
        foo();
    }   
    bar();