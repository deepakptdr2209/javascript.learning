const name = "deepak"
const repoCount = 3

console.log(name + repoCount + "value");  // this is old way to merge string

// niche wale format ko folloew krke hi string merge
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('deepak-dp-com')  //way to declare string and this is used to use method and object used for string


//string methods
console.log(gameName.length);
console.log(gameName.charAt(5));
console.log(gameName.indexOf('p'));
 
//trim is used to remove white space before and after the string 
// this is useful to remove unwanted spaces given by user

const user = "  deepak   "
console.log(user.trim());
console.log(user);

// methods like replace, includes , split used for url

const url = "https://deepak.com/deepak%20choudhary"

// to replace %20 we use replace()
console.log(url.replace('%20','-'));

// include is used to find presence of string pr word in that string
console.log(url.includes('sundar'));

// split is used split the string at particular point 

console.log(gameName.split('-'));
