// Primitive Data Types

// string - test data (inside quotes)

let name = "siddhesh";
let city = "pune";

// Number  - Integers & decimals includes infinity to - infinity , NaN

let age = 25;
let price = 99.23;

// BigInt for very large Numbers

let big = 253647491727046473937646289734567;

console.log(big);

// boolean - True/False

let isLoggedIn = true;

// Undefined - declared but not assigned

let x;

console.log(x);

// Null - Intentional absence of value
let data = null;

console.log(typeof(data)); // typeof null -> object(js bug)

// symbol - unique identifiers

let id = Symbol("id");

console.log(id);

// Object - Key-value pairs

let user = {
  name: "Alex",
  age: 30
};

// Common Object Types
// type = example

Array	= [1, 2, 3]
Function = 	function add() {}
Date	= new Date()
Map	= new Map()
Set	= new Set()
