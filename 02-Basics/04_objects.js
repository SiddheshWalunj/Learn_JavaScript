// const tinderUser = new Object() 
const tinderUser ={}

// console.log(tinderUser); // {}

tinderUser.id ="123abc"
tinderUser.name = "siddhesh"
tinderUser.isLoggedIn = false

console.log(tinderUser); // { id: '123abc', name: 'siddhesh', isLoggedIn: false }

const regularUser = {
    email :"some@gmail.com",
    fullname:{
        userFullname:{
            firstName : "siddhesh",
            lastName : "walunj"
        }
    }
}

// console.log(regularUser.fullname); //{ userFullname: { firstName: 'siddhesh', lastName: 'walunj' } }
// console.log(regularUser.fullname.userFullname.firstName); // siddhesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
const obj3 = {...obj1, ...obj2}// use this to spread object

// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const course = {
    courseName :"js in hindi",
    price: 999,
    courseInstructor:"siddhesh"
}
// object destructuring
const {courseInstructor} = course
console.log(courseInstructor); // siddhesh

