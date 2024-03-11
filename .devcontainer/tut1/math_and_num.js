const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);  // this will give the length of number and datatype become string

// console.log(balance.toFixed(1));
  // tofixed is used to give 100.00 as output , digit after decimal depends on number you give in parameter


const otherNumber = 123.8966
//precision is used to give total no. inlcudeing after decimal it also round off 
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//tolocal  string is used to pu comma like 1,00,000 to 100000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// js has its build in math library, Math is used to access
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());//rabdom method gives every time new no btwn 0 to 1

console.log((Math.random()*10) + 1);//this is used to take otput from 1 to 10
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // this is the formula you can use to get random no. within the range you want