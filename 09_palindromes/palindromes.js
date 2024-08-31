const palindromes = function (string) {

    function letterVerification(character) {
        // Use a regular expression to check if the character is not a letter
        return /[a-zA-Z0-9]/.test(character);
    }

    function spaceVerification(character){
        return (character !== " ");
    }
    
    let stringArray = string.toLowerCase().split('');

    stringArray = stringArray.filter(letterVerification);
    stringArray = stringArray.filter(spaceVerification);

    string = stringArray.join('')
    let stringReverse = stringArray.reverse().join('')
    
    
    console.log(string)
    console.log(stringReverse)

    if(stringReverse === string){
        return true;
    }
    else{
        return false;
    }


};

console.log(palindromes("rac3e3car"))

// Do not edit below this line
module.exports = palindromes;
