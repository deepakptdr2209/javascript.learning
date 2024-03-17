const accountId = 12345
let accountPass = "2345"
var accountEmail = "dp234@gmail.com"
accountCity = "Indore"
let accountState;//this will provide output as undefined in javascript

//  accountId=1  //not alllowed ,we cant change the const on javascript
/*
prefer not to use var for variable
because of functional scope and block scope issue
alwways use "let " for variable 
*/

accountEmail = "sfrgr@gmai.vom"
accountPass  = "12344"
accountCity = "rajgarh"
console.log(accountId);
console.table([accountEmail,accountId,accountPass,accountCity,accountState])
