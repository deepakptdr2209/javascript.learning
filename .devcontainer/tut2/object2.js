// const tinderUser = new Object()    // sigleton object ko constructor k through declare krna
const tinderUser = {}  //ese non sigleton ko 

//++++++++++++++ object me value ese assign kri jati h ++++++++++
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//+++++++++++ object k ander object mtlb nested bhi kr ske h ++++++++
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// +++++++++++bhot sare object ko ek hi me dalne k liye ya to assign operator ya spread operator++++++++
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  /// ese krenge to object k ander object aa jayega 
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // ese krne pr ek hi m aayega

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//++++++++ DB se data aayega to vo array of object aayega use ese use krenge ++++++++++
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // -> ye keys of object ko array me dl dega fir hm loop lga skenge
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

/*+++++++++ bhot bar object ko loop through krte h or koi value nikalte
            to agr vo valur object m nhi hogi to crash hone k chances h
            is problem se bachne k liye hasOwnProperty(value) use krke puch lenge   */

        // console.log(tinderUser.hasOwnProperty('isLoggedIn'));


        //++++++++++++ Destructuring ++++++++++ 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor  // esa br br likhne ki jgh hum niche wala use krke destructuring kr skte h

const {courseInstructor: teacher} = course   // { } jab bhi esa braces dikhe mtlb destructuring hui h

// console.log(courseInstructor);  
console.log(teacher);


  //++++++++++++ JSON me data kese rhte ha vo he niche
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
