// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// //++++ for of is used instead of for it iterate over the iteraterable (array, string etc)

// for (const num of arr) {
//     //console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     //console.log(`Each char is ${greet}`)
// }

//++++++++++++++++++++++ Maps ++++++++++++++++++++++++

const map = new Map()  // declaration of map 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// map ko for of se access kr skte h [key , val ] key hme keys dgi or value hme key ki value degi
for (const [key, value] of map) {
    // console.log(key, ':-', value);  // output lene k liye ese krenge
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}


// obejct iterable nhi hote h to hum ise for of se iterate nhi kra skte
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}