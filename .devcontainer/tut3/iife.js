// Immediately Invoked Function Expressions (IIFE)

// iife ka use global scope k pollution se jo problem hoti h us se bachne k liye use krte h syntax ()()
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
