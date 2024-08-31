const convertToCelsius = function(fahrenheit) {
  celsius = (fahrenheit - 32)*(5/9)

  if(celsius % 1 !== 0){
    return parseFloat(celsius.toFixed(1));}
  else
    return celsius
};

const convertToFahrenheit = function(celsius) {
  fahrenheit = (celsius*9/5)+32
  
  if(fahrenheit % 1 !== 0){
    return parseFloat(fahrenheit.toFixed(1));}
  else
    return fahrenheit
};

// Do not edit below thishow line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
