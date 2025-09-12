const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curVal) {
//     console.log(`acc: ${acc}, current value: ${curVal}`);
//     return acc + curVal
// }, 0)

const myTotal = myNums.reduce((acc, curVal)=> acc + curVal, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js",
        price: 2999
    },
    {
        itemName: "python ",
        price: 999
    },
    {
        itemName: "java course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const num = shoppingCart.reduce((acc, item)=> acc + item.price, 0)

console.log(num);