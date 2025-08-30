
// function sayMyName() {
//     console.log("i");
//     console.log("z");
//     console.log("h");
//     console.log("a");
//     console.log("r");
// }

// sayMyName()      //// sayMyName without parentisis is reference of the function & function with parentsis is the execution of the function

// function addTwoNumbers(num1,num2){   //// num1 and num2 are called PARAMETERS &&&&&
//     // console.log(num1 + num2);
// }
// addTwoNumbers(4,null)  ////  4 and NULL are called arguements


function addTwoNumbers(num1,num2){   
    let result = num1 + num2 
    return result
}
const result = addTwoNumbers(4, 6)
// console.log("Result:" + result);


function loginUserMessage(username = "sam"){  /// "sam" = default value
    if(username === undefined){     //// second method if(!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("izhar"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 8133));

const user = {
    username: "Izhar",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Izhar",
    price: 199
})

const myNewArray = [200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
