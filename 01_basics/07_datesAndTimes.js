//Dates

const myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());

// const customDate = new Date(2023, 0, 21, 6, 12)
let customDate = new Date("12-18-2023")
console.log(customDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myDate.getTime());

//convert to seconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toLocaleString('default', {
    day: "numeric",
    weekday: "long"
}));
