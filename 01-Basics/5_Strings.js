const name = "siddh e sh"

const repoCount = 12

console.log(name + repoCount);

console.log(` hello my name is ${name} and my repo count it ${repoCount}`);

console.log(name.length); // 8

console.log(name.toUpperCase()); // SIDDHESH

console.log(name.charAt(2)); // d

console.log(name.indexOf('e')); // 5

// strings method should know everyone

const newString = name.substring(0,4)
console.log(newString); // sidd

// slice() extracts part of an array or string without changing the original.
const anotherString ='siddhesh walunj'
console.log(anotherString.slice(0,6));

const trimString = `this is my first code`;
console.log(trimString.replace('f', 't')); // this is my tirst code

console.log(name.split(' ')); // [ 'siddh', 'e', 'sh' ]








