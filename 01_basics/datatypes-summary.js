//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference (Non-primitive)

// Array, Objects, Functions

const rappers = ["J. Cole", "Kendrick Lamar", "Eminem", "Biggie Smalls"]

const myObj = {
    name : "Amit",
    age : 20,
    salary : 100000
}

const myFun = function() {
    console.log("Hey fellas!");
}

console.log(typeof rappers);
console.log(typeof myObj);
console.log(typeof myFun);


//*****************************Memory*********************************

//Primitive => Stack
//Non-Primitive => Heap

