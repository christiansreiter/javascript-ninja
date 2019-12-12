(function(win) {
    'use strict';

    function myFunction() {
        var result =  Array.prototype.reduce.call(arguments, function( acumulad, actual) {
            return acumulad + actual
        });
        console.log(result)
    }

    
    myFunction(1, 2, 3, 4, 5, 6, 7, 8) 

    
})(window);