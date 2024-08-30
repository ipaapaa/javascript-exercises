const reverseString = function(string) {
    let reversed = "";

    for(let length = string.length-1; length >= 0; length-- ){
        reversed += string[length]
    }
    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
