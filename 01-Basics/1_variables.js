const accountID = 512
let accountEmail = "snwalunj007@gmail.com"

//  var

var x = 10;

if (true){
    var x = 20
}

console.log(x);

/*
Key points
- Function-scoped (not block-scoped)
- Can be redeclared
- Can be reassigned
- Hoisted and initialized as undefined
- Causes bugs → not recommended
*/

// let(modern, preferred)

let y = 10;

if (true) {
    let y = 20; // different variable
}

console.log(y);

/*
Key points
- Block-scoped
- Cannot be redeclared in same scope
- Can be reassigned
- Hoisted but in Temporal Dead Zone
*/

// const 

const z = 30

console.log(z);

const user = {name : "siddhesh"};

user.name = "doe" // this updated the name with doe

console.log(user);

/*
Key points

- Block-scoped
- Cannot be redeclared
- Cannot be reassigned
- Must be initialized
- Object values can still be mutated
*/



