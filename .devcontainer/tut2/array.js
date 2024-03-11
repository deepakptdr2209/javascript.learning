// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

 myArr.unshift(9)  //The unshift() method of Array instances 
 //adds the specified elements to the beginning of an array
 // and returns the new length of the array.
 myArr.shift() //The shift() method of Array instances removes the first element from an array
 // and returns that removed element. This method changes the length of the array

 //console.log(myArr.includes(9));
 //console.log(myArr.indexOf(3));

 const newArr = myArr.join()

 console.log(myArr);
 console.log( newArr);


// slice, splice

//console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

// splice agar use krenge to original array bhi manuplate ho jayegi 
// arr = [0,1,2,3,4,5] after arr.splice(1,3)
//output me original arr = [0,4,5] or splice wali = [1,2,3]

// but slice me esa nhi hota isme sirf new array jo slice ki h vhi hogi 
//eg arr.slice(1,3)
// output = [1,2]
//slice me jo bhi index hum denge uski renge ka first and last ko chodkr print hoga