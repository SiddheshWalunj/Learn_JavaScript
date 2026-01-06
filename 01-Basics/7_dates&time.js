// dates in javascripts
// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let newDate = new Date()

console.log(newDate); // 2026-01-06T12:48:04.110Z

console.log(newDate.toString()); // Tue Jan 06 2026 18:18:04 GMT+0530 (India Standard Time)

console.log(newDate.toDateString()); // Tue Jan 06 2026


console.log(newDate.toLocaleString()); // 1/6/2026, 6:18:04 PM

// let myCreatedDate = new Date(2024, 0, 23)
let myCreatedDate = new Date("2023-01-14")

console.log(myCreatedDate.toDateString()); // Sat Jan 14 2023

let myTimeStamp = Date.now()

console.log(myTimeStamp); // 1767703794822

console.log(myCreatedDate.getTime()); // 1673654400000

console.log(Math.floor(Date.now()/1000)); // 1767703901






