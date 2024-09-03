const myObj = { name: "Alex" };
console.log(myObj.name);

const anotherObj = {
  alive: true,
  answer: 7,
  hobbies: ["Read", "Write", "Travel"],
  beverage: {
    morning: "Tea",
    afternoon: "Lemonade"
  },
  action: function() {
    return `Time for ${this.beverage.morning}`;
  }
};
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());

const vehicle = {
  wheels: 4,
  engine: function() {
    return "Vroom!";
  }
};

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {
  return "Zoom!";
};
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = function() {
  return "Whirr...";
};
console.log(tesla.engine());

const band = {
  vocals: "Freddie Mercury",
  guitar: "Brian May",
  bass: "John Deacon",
  drums: "Roger Taylor"
};

const { guitar: myVariable, bass: myBass } = band;
console.log(myVariable);
console.log(myBass);

const { vocals, guitar, bass, drums } = band;
console.log(myVariable);
console.log(vocals);

function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));
