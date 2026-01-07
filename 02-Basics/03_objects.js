// objects literls
/*
The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.   
*/
const mySym = Symbol("key1")

const newObj = {
    name :"siddhesh",
    age : 26,
    [mySym]:"myKey1",
    email :"sn@gmail.com",
    isLoggedIn : false,
    location : "pune"
}
console.log(newObj.email); // sn@gmail.com
console.log(newObj["email"]); // sn@gmail.com

console.log(newObj[mySym]); // myKey1

newObj.email="walunj@gmail.com"
Object.freeze(newObj);

console.log(newObj.email); // walunj@gmail.com


newObj.greeting = function(){
    console.log("hello js user");
}

newObj.greeting1 = function(){
    console.log(`hello js user${this.name}`);
}

// console.log(newObj.greeting); // undefined
console.log(newObj.greeting);
console.log(newObj.greeting1);

