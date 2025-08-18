// Array 

const myArr = [0,1,2,3,4,5]   // Array can also store BOOLEAN and STRINGS

// Array accessing method
// console.log(myArr[0]); // Provide an index of the array to access an element.

const myHeros = ["IronMan", "AntMan", "Hulk", "BlackWidow"]

// const newArr = new Array(1, 2, 3, 4)

// +++++   Array Methods  +++++ //

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(5));

const newArr = myArr.join() // Join converts all the elements into string.

// console.log(myArr);

// console.log(newArr);
// console.log(typeof newArr);

// Slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr)

const myn2 = myArr.splice(1,3)

console.log(myn2);
console.log("C ",myArr) // in SPLICE, the original array is changed and the last index of the range is also included means splice changes the Array. Whereas slice doesn't change the array.

