const user = {
    username: "izhar",
    price: 199,
    // THIS current context ko refer karta hai
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website.`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai (){
//     let username = "izhar"
//     console.log(this);        // THIS cannot be used in functions
// }

// chai()

// const chai = function () {
//     let username = "izhar"
//     console.log(this.username);
// }


const chai = () => {
    let username = "izhar"
    console.log(this);
}
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 ) // implicit return

const addTwo = (num1, num2) => ({username: "izhar"})
console.log(addTwo(3, 4))

// const myArray = [0,1,2,3,4,5]

// myArray.forEach(function(){})
// myArray.forEach(()=>{})
// myArray.forEach(()=>())