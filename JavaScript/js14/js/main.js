//var x = 1;
//var x = 2;
//console.log(x);

let x = 1;
x = 2;
//console.log(x);

const yr = 2;

var z = 13;
let aq = 2;
const br = 6;


{
  let x = 3;
  console.log(z)
}

function myFunc() {
  const zy = 5;
  console.log(x)
}

if (true) {
  const r = 4
  console.log(y);
}
//console.log(zy);

myFunc();

var a = 1;
let b = 2;
const c = 3

console.log(`global: ${a}`);
console.log(`global: ${b}`);
console.log(`global: ${c}`);

function myFunc2() {
  var a = 10;
  var z = 5;

  console.log(`global: ${a}`);
  console.log(`global: ${b}`);
  console.log(`global: ${c}`);

  {
    var a = 11;
    var z = 6;
    console.log(`block: ${a}`);
    console.log(`block: ${b}`);
    console.log(`block: ${c}`);
  }
  console.log(`function: ${a}`);
  console.log(`function: ${b}`);
  console.log(`function: ${c}`);
}

myFunc2();