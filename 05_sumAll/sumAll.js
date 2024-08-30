const sumAll = function(num1,num2) {

    if(typeof(num1)!== 'number' || typeof(num2)!== 'number' || num1 < 0 || num2 < 0 || num1 % 1 !== 0 || num2 % 1 !== 0 ){
        return "ERROR";
    }

    function range (num1,num2){
        let rangeArray = [];
        if (num1 < num2){
            while(num1 <= num2){
                rangeArray.push(num1);
                num1++;
            }
            return rangeArray;
        }
        else if (num1 > num2){
            while (num1 >= num2){
                rangeArray.push(num1);
                num1--;
            }
            return rangeArray;
        }
        else {
            return rangeArray.push(num1);
        }
    }

    let sum = 0;

    for (let number of range(num1,num2)){
        sum += number;
    
    }

    return sum;



        
};


// Do not edit below this line
module.exports = sumAll;
