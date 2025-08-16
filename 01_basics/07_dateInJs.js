
// Dates

let myDate = new Date()

// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate); // OBJECT

// let myCreatedDate = new Date(2025, 2, 30, 5, 30)
let myCreatedDate = new Date("03-30-2025")

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp =new Date.now()
let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

// //console.log(Date.now());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth()+1); // " + 1" for end user since month starts from 0(indexing is from 0)
console.log(newDate.getDate());
console.log(newDate.getDay()); // starts with Sunday with index 0

newDate.toLocaleString('default',{
    weekday:"long"
})