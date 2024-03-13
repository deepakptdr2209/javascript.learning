// singleton bnane k liye constructor ka use krna hota h
// Object.create

// object literals niche jese bna h vse bnega 

const mySym = Symbol("key1")  // symbol declaration


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // symbol ko ese declare krna h object ke ander agr use krna h to [mySym]
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// ++++++++ to access from  object +++++++++

// console.log(JsUser.email)  // => ese acces krna bhi thikh h but problem tab aati h jab object me string key ho , jese ki (full name)
// console.log(JsUser["email"]) // isliyeese access kr ke hm sring ko bhi access kr lenge
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  // symbol accesss ese hoga

// ++++++++ to change and freeze value in object +++++++++

JsUser.email = "hitesh@chatgpt.com"   // object ki value ese simply change r skte h
// Object.freeze(JsUser)   // is se value lock ho jayegi ab ise change nhi kr skte
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.email}`); // this ka use krne se hum object k ander ki chije acces kr skte h fun me
}

console.log(JsUser.greeting());  /// print the function description
console.log(JsUser.greetingTwo());//print the function description