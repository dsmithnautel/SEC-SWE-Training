let myNumber = 0;
while (myNumber <= 50) {
  myNumber++;
  console.log(myNumber);
}

do {
  console.log(myNumber);
} while (myNumber < 50)


let name = "Dave";
for (let i = 1; i <= name.length; i++){
  console.log(charAt(i));
}

let counter = 0;
let myLetter;
while (counter <= 3) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "") break;
  counter++;
}
console.log(counter);