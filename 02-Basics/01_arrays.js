const myArr = [0,1,2,3,4,5]
const names = ["siddhesh","om", "vinu","RK"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr2[1]); // 2
console.log(myArr[1]); // 1

// methods in array

myArr.push(6)
myArr.push(7)
myArr.pop() // pops the last element
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6, 7 ]

// myArr.unshift(9)
// myArr.shift()

const newArr = myArr.join()

// slice 

console.log("A = ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B = ", myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2);




