const user = {
    username: "hitesh",
    price: 999,
// jab bi hum current context ko refer krte  to "this" keyword ka use krenge
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // ye hume current context me kya h vo dega as output
    }

}

// user.welcomeMessage()
// user.username = "sam"  // yha humne username change kr diya to context bhi change ho gya abb output me sam aayega
// user.welcomeMessage()

// console.log(this); // isme ouput empty {} aayega or important bat ki brower k console me 
                      // ye this hue window show krega .. mtlb this me kuch to rkha hota h


          // function k ander this undefined aata he km ni krega keval object me krega            
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  
// }

// chai()
//++++++ isme niche wale me bhi this nhi use kr skte+++++++++
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// ++++++++++ arrow fun jo niche h usme bhi this undefined hi hoga+++++++
   // arrow fun k liye function keyword hta k parenthesis k bad arrow lga do 
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()


//+++++++++ niche wala arrow fun ka use explitcit way me mtlb return keyword dena pdega 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
 
// isme return keyword k bina hi chlega ise implicit function bolenge
// const addTwo = (num1, num2) =>  num1 + num2

//++++ parethesis jo lagai h num1 + num2 k upr use use krne pr hum object ko bhi return kra skte h
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})  /// parethesis use krni hi pdegi return krane k liye


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()