const score = 400

const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(balance.toString()); // 100

console.log(balance.toString().length); // 3

console.log(balance.toFixed(2)); // 100.00


const otherNum = 123.867534
console.log(otherNum.toPrecision(3)); // 124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

// ------------------------- MATHS --------------------------------------------
console.log(Math);
console.log(Math.abs(-4));  // 4

console.log(Math.round(4.6)); // 5

console.log(Math.ceil(4.2)); // 5

console.log(Math.floor(4.2)); // 4


console.log(Math.min(4,3,6,8)); // 3
console.log(Math.max(4,3,6,8)); // 3


// math random

console.log(Math.random()); // value can be between 0 to 1, can be anything

console.log(Math.random()*10);










