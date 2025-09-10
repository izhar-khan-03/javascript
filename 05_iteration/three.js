// for of 

// ["", "" ,""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
    //  console.log(num);
// }

// const greetings = "Hello World!"

// for (const greet of greetings) {
    // ////  below [if condition] for whether or not to CONTINUE the loop if space is detected by continue keyword
    // if (greet == ' ') {
    //     console.log("space detected");
    //     continue
    // }
    // console.log(`Each char is: ${greet}`);
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
    'game3' : 'Roblox',
    'game4' : 'PUBG'
}
for (const [key, value] of myObject) {
    console.log(key+':-'+value);
}