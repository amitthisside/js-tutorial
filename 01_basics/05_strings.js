const name = "Amit"
const age = 18

// console.log(name + age + " years old");

//string interpolation :
// console.log(`Hello my name is ${name} and I'm ${age} years old`);

//other declaration
const gameName = new String('amitthisside')

// console.log(gameName[2]); //this is object, not array //we have key value pairs
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newSubString = gameName.substring(0, 5)
// console.log(newSubString);

const anotherSubString = gameName.slice(-11, 4) //negative indexing also allowed
// console.log(anotherSubString);

const newStringOne = "     amit    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://www.nascent.com/nascent%20entertainment"
// console.log(url.replace('%20','-'));
// console.log(url.includes('nascent'))

const splitString = "the-quick-brown-fox-jumped-over-the-little-lazy-dog"
console.log(splitString.split('-'));
const arrayString = splitString.split('-')
console.log(arrayString[2]);
