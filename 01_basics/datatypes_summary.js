// Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; // let userEmail=undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);

const bigNumber = 45645646543534154n

// ---------------------------------

// Reference (Non-primitive)

// Array, Objects, Functions


const heros = ["shaktiman","naagraj","doga"];

let myObj={
    name: "Izhar",
    age: 22
}

const myFunction = function(){
    console.log("Hello world"); 
    
}

////////console.log(typeof id);

// +++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)

let myYoutubeName = "Deluxe playss"

anotherName = myYoutubeName

anotherName = "Izhar playss"


console.log(anotherName);

let user1 = {
    email:"Izhar@gmail.com",
    upi:"abc@123"
}

let user2 = user1

user2.email = "Deluxe@gmail.com"

console.log(user1.email);
console.log(user2.email);
