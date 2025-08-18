// Singelton  (whenever an object is made from a constructor, it is singleton.)
// Object.create (syntax for object creation from constructor)

// Object literals

const mySym = Symbol("key1")
// to allocate a symbol as a key in an object, the symbol_name should be in square brackets. and the access method should be the square brackets one too.

const JsUser = {
    name: "Izhar",
    "full name": "Izhar Khan",
    [mySym]: "myKey1",
    age: 19,
    location: "Mumbai",
    email: "izhar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "izhar@mhssce.ac.in"
// Object.freeze(JsUser)
// JsUser.email = "izhar@krafton.in"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user.")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name},${this["full name"]}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
