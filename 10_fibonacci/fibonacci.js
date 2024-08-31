const fibonacci = function(nthNumber) {
 
    nthNumber = parseInt(nthNumber);
    if (nthNumber === 1 || nthNumber === 2){
        return 1;
    } else if (nthNumber < 0){
        return "OOPS";
    } else if(nthNumber === 0){
        return 0;
    }
    else{
        return fibonacci(nthNumber - 1) + fibonacci(nthNumber - 2)
    }


    

};

// Do not edit below this line
module.exports = fibonacci;
