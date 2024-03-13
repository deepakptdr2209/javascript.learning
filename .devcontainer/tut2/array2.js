const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)  // agar ese krenge to array k ander array aa jayega mtlb array as a data le lega
// output ["thor", "Ironman", "spiderman",["superman", "flash", "batman"]]

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);  // acces the arrray k ander array

const allHeros = marvel_heros.concat(dc_heros) // merge kr dega array ko ,but isme two hi array hi kr skte h
//console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros]   // (...)spread operator is used to spread the array in one array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//flat is used to spread in one array ,fir chahe kitne bhi array k ander array ho

const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);


// isArray k ause krke pta lga lenge jab bhi data hme web scrap kr ke lenge
// is se ye pta chl jayega ki data jo aayya he vo array h ya nhi
// agr array nhi hoga to use use array me convert krne k liye
// Array.from() ka use krke convert kr denge
console.log(Array.isArray("Hitesh"))  
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting isliye h ktoki empty array dega kyoki pta nhi h ise

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Array.of() se array me convert hoga


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ of , from , is ++++++++++++++++++++++++ 

// * The Array.isArray() static method determines whether the passed value is an Array.
// * The Array.of() static method creates a new Array instance from a variable number of arguments,
//   regardless of number or type of the arguments.
// * Array.from() lets you create Arrays from:
//   iterable objects (objects such as Map and Set); or, if the object is not iterable,
//   array-like objects (objects with a length property and indexed elements