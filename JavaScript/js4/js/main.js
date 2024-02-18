const myNumber = 8;
const myFloat = 8.13905
const myString = "8.123abc";

console.log(myNumber === myFloat);
console.log(myNumber === myString);

console.log(myString + 4);

console.log(Number(myString) + 4);
console.log(Number(myString) === myNumber);

console.log(Number("Derek"));

console.log(Number(true), Number(false));

console.log(Number.isInteger(myNumber));
console.log(Number.parseFloat(myString).toFixed(2));
console.log(Number.parseInt(myFloat).toString());

console.log(Number.parseFloat(myString).toFixed(2).toString());

console.log(Number.isNaN(myString));
console.log(isNaN(myString));