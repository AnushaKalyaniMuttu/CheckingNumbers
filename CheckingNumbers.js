// Conversion
console.log(Number('23'));
console.log(+'23');
// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));
console.log(Number.parseInt(' 2.5 rem '));
console.log(Number.parseFloat(' 2.5rem '));
// console.log(parseFloat(' 2.5rem '));
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));



/*23
23
30
NaN
2
2.5
false
false
true
false
*/
