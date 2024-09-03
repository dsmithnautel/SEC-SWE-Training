const myArray = [];

myArray[0] = "Derek";
myArray[1] = 1001;
myArray[2] = false;

console.log(myArray);

console.log(myArray.length);

console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);

myArray.push("school");

console.log(myArray);

const lastItem = myArray.pop();

console.log(lastItem);

const firstItem = myArray.shift(42);

console.log(firstItem);
console.log(myArray);
console.log(myArray[1]);
console.log(myArray[2]);

delete myArray[1];

myArray.splice(1, 0, 42);

console.log(myArray);
console.log(myArray[1]);

const anArray = ["A", "B", "C", "D", "E", "F"];

const newArray = anArray.slice(2, 5);

console.log(newArray);

anArray.reverse();

const newString = anArray.join();

const newArrayFromString = newString.split(",");

console.log(newArrayFromString);

const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

const combinedArray = [myArrayA, myArrayB];

console.log(combinedArray);

const equipShelfA = ["basketball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);
