//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

//const heros = ["shaktiman", "naagraj", "doga"];
/*let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}*/

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//************************************************************* */

// Memory in javascript is of two type 
// Stack (primitive) and Heap (reference or non primitive)

// example of stack

let username = "deepakpatdr"
let anotherName = username
 anotherName = "ptdrdeepak"
 //console.log(username);
 //console.log(anotherName);
 //is se ye smj aata he ki stack me hm copy dete h original 
 // ki to jo bhi change hoga vo copy me hoga
 // original variable ki value change nhi hogi 

 //Heap ka example

 let userOne = {
    email: "dp@gmail.com",
    name : "ptdr"

 }
 let userTwo = userOne

 console.log(userTwo.email);
 userTwo.email = "acb@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);

 // heap me agar variable me change kiya to uski original hi change hoga kyoki heap reference leta h original se
// because of that line 67 and 68 me console log krne 
// pr hme same email mili ie dcb@gmail.com