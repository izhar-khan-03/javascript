// var c = 300  //// the value of 'c' is rewrutten because of var or no variable declaration keyword

// let a = 500
// if (true) {
//     let a = 10
//     console.log("INNER: ", a);
//     // by "let" the value is change within a block scope but it is redoed in the global scope
//     // const b = 20
//     // var c = 30
// }

// console.log(a);
// // console.log(b);
// // console.log(c);
 

function one(){
    const username = "izhar"

    function two(){
        const website = "youtube.com"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

if (true) {
    const username = "izhar"
    if (username === "izhar") {
        const website = " youtube"
        console.log(username+website)
    }
    // console.log(website);
    
}

// console.log(username);  

////// ++++++ interesting ++++++ /////////


console.log(addone(5))

function addone(num){
    return num + 1
}



const addtwo = function(num){
    return num + 2
}

console.log(addtwo(5))
 