"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let car3 = 'subaru';
console.log("Is car3 == 'subaru'? I predict True.");
console.log(car3 == 'subaru');
let car4 = "toyota";
console.log("Is car4 == 'subaru'? I predict false");
console.log(car4 == 'subaru');
let car5 = 'subaru';
console.log("Is car5 == 'Subaru'? I predict false.");
console.log(car5 == 'Subaru');
let number1 = 8;
console.log(number1 == 6);
console.log(number1 < 6);
console.log(number1 > 6);
let number2 = 4;
console.log(number2 <= 4);
console.log(number2 >= 4);
console.log(4 < 6 && 6 < 5);
console.log(4 < 6 && 6 < 8);
console.log(4 < 6 || 6 < 5);
console.log(4 < 3 || 6 < 5);
let arr = ['🤢', 'a', 'b'];
console.log(arr.includes('🤢'));
console.log(arr.includes('😊'));
