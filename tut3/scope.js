//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//yha hum accesss kr skte h kykoi fun kisi variable k through nhi h
console.log(addone(5))

function addone(num){
    return num + 1
}


// Cannot access 'addTwo' before initialization
// mtlb agr hum fun ko variable me hold kr k use krenge to 
// initialisation k phle access ni kr payenge
addTwo(5)      // line 57 error degi reason upr ki line me h 
// agr line 57 ko line 62 pr denge to no error
const addTwo = function(num){
    return num + 2
}
