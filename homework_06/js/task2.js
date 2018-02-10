var Euro = parseFloat(prompt('Please, input amount of EURO:'));
var USD = parseFloat(prompt('Please, input amount of USD:'));
var C_Euro = 33.2324;
var C_USD = 27.1240;

console.log(Euro + ' euros are equal '+(Euro*C_Euro).toFixed(2) +' UAH, '+USD+' dollars are equal '+ (USD*C_USD).toFixed(2) + ' UAH, one euro is equal '+ (C_Euro/C_USD).toFixed(2) + ' dollars.');