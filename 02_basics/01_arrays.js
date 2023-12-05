// array
let myArr = [0, 1, 2, 3, 4, 5]
let rappers = ["TuPac", "Eazy-E", "XXXTeantacion"]

let newArr = new Array(2, 4, 6, 8, 10)

// console.log(newArr[2]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

const strArr = myArr.join()

// console.log(myArr);
// console.log(typeof strArr);

//slice, splice
console.log("A" , myArr);

let arr1 = myArr.slice(1,3)
console.log(arr1);
console.log("B" , myArr);

let arr2 = myArr.splice(1,3)
console.log(arr2);
console.log("C" , myArr);
