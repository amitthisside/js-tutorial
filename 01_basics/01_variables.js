const accountId = 13131
let accountEmail = "amit@xyz.com"
var accountPass = "18122003"
city = "Delhi"
let state; // state variable has undefined value
// accountId = 2 // this is not allowed

//this is allowed
accountEmail = "abc@wqe.com"
accountPass = "1231211"
city = "Greater Noida"

/*
prefer not to use var because of issues with block scope and functional scope
use let instead
*/

console.table([accountId, accountEmail, accountPass, city, state]);