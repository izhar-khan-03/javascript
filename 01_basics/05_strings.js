let name = "Izhar"
let age = 19

console.log(name + "is " + age + " old.");

console.log(`My name is ${name} and I'm ${age} old.`);

const gameName = new String("del.xuxe..izhar..khan..ik")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf('x'));

const newString = gameName.substring(0, 4)

console.log(newString);

const anotherString = gameName.slice(-8,5)

console.log(anotherString);

const StringOne = "     izhar         "
console.log(StringOne);
console.log(StringOne.trim());

const url = "https://google.com/how%20to%20become..."

console.log(url);
console.log(url.replace("%20",'-'));

console.log(url.includes("izhar"))

console.log(gameName.split(".."))
console.log(gameName.split(".",7))