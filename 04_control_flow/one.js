// if
// const isUserLoggedIn = true
// const temperature = 26

// if ( temperature === 26 ){
//     console.log("Less than 50");
// } else {
//     console.log("Temperature is greater than 50.");
// }
// console.log("Executed")
// 3 != 2
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if ( score > 100 ){
//     const power = "fly"
//     console.log(`User power:${power}`)
// }
// console.log(`User power:${power}`)


// const balance = 1000

// if (balance > 500) // console.log("Test"),    // IMPICIT scope
// console.log("test2"); // Can extend scope of impictiy by adding "," after lines and make sure to add "semi-colon(;)"

// if (balance < 500){
//     console.log("less than 500");

// } else if (balance < 750){
//     console.log("less than 750");

// } else if (balance < 900){
//     console.log("less than 900");

// } else if (balance < 999){
//     console.log("less than 999");

// } else {
//     console.log("Greater than 1000");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("Login Allowed.");
}